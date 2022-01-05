import s from "./LearnPage.module.css"
import Card from "@mui/material/Card";
import React, {useEffect, useState} from "react";
import {CardType, fetchUpdateCard, requestCards, setCurrentCardsPackID} from "../../redux/cardPacksReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {useHistory} from "react-router-dom";
import {Button, CardActions, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {Preloader} from "../../components/common/Preloader/Preloader";
import BtnAll from "../../components/common/BtnAll/BtnAll";
import { styled } from '@mui/material/styles';




const grades = [
    'Did not know',
    'Forgot',
    'Thought for a long time',
    'Confused',
    'Knew',
]

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce(
        (acc, card) => acc + (6 - card.grade) * (6 - card.grade),
        0
    );
    const rand = Math.random() * sum
    const res = cards.reduce(
        (acc: { sum: number; id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade)
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        },
        {sum: 0, id: -1}
    )

    return cards[res.id + 1]
}




export const LearnPage = () => {

    const cards = useSelector((state: AppStateType) => state.cardPacks.currentCards.cards)
    const cardName = useSelector((state: AppStateType) => state.cardPacks.currentPackName)
    const currentCardsPackId = useSelector((state: AppStateType) => state.cardPacks.currentCardsPackId)
    const appStatus = useSelector((state: AppStateType) => state.app.status)

    const history = useHistory()
    const dispatch = useDispatch()

    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [first, setFirst] = useState<boolean>(true)
    const [grade, setGrade] = useState<number>(0)
    const [card, setCard] = useState<CardType>({
        answer: 'answer fake',
        answerImg: null,
        answerVideo: null,
        cardsPack_id: '',
        comments: null,
        created: '',
        grade: 0,
        question: 'question fake',
        questionImg: null,
        questionVideo: null,
        shots: 0,
        updated: "",
        user_id: '',
        _id: 'fake',
        rating: 0
    })


    useEffect(() => {
        if (first) {
            dispatch(requestCards())
            setFirst(false)
        }

        if (cards.length > 0 && !first) setCard(getCard(cards))

    }, [dispatch, cards, first])

    const onNextHandler = () => {
        setIsChecked(false)

        if (cards.length > 0) {
            dispatch(setCurrentCardsPackID({currentCardsPackId}))
            dispatch(fetchUpdateCard(grade, card._id))
            setCard(getCard(cards))
        }
    }

    // for btn CANCEL

    const styleBtnCancel: any = {
        color: '#21268F',
        background: '#D7D8EF',
        width: '124px',
        opacity: '0.8',
        // marginRight: '40px',
    }

    // for btn SHOW ANSWER

    const styleBtnShowAnswer: any = {
        color: '#ECECF9',
        background: '#21268F',
        width: '187px',
    }

    // for btn NEXT 

    const styleBtnNext: any = {
        color: '#ECECF9',
        background: '#21268F',
        width: '187px',
    }


    // стилизация значка в ненажатом состоянии!

    const BpIcon = styled('span')(({ theme }) => ({
        borderRadius: '50%',
        width: 16,
        height: 16,
        marginRight: 12,   
        outline: '1px solid #2D2E46',
    }));
    
    // стилизация значка в нажатом состоянии!
    
    const BpCheckedIcon = styled(BpIcon)({
        backgroundColor: '#FFFFFF', 
        outline: '4px solid #21268F',    
        display: 'block',
        width: 16,
        height: 16,
    })

    // Inspired by blueprintjs

    function BpRadio(props: RadioProps) {
        return (
        <Radio
            disableRipple
            // color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
        );
    }

    //  cтили для группы чекбоксов

    const MyFormControlLabel = styled(FormControlLabel)({
        '& .MuiTypography-root': {
            fontFamily: 'SFUIDisplay-Regular',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#2D2E46',
        },    
    });

    //styleForLabel

    const styleForLabel: any = {
        textAlign: 'left',
        marginBottom: '10px',
        fontFamily: 'SFUIDisplay-Semibold',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#2D2E46'
    }


    return (
        <Card className={s.card}>
            {appStatus === 'loading' && <Preloader/>}
            <h3 className={s.subtitle}>Learn ' {cardName} '</h3>
            {card.question === 'question fake' ? (
                <p className={s.noQuestion}>
                    <b>No questions in this Pack!!!</b>
                </p>
            ) : (
                <p className={s.question}>
                    <b>Question</b>: ' {card.question} '
                </p>
            )}

            {!isChecked && (
                <CardActions style={{paddingLeft: 0, paddingRight: 0}}>

                    <div className={s.btnWrap}>                    

                        <BtnAll name='Cancel' style={styleBtnCancel} onClick={() => {
                            history.goBack()
                        }} />


                        {/* <Button onClick={() => {
                            history.goBack()
                        }}>
                            Cancel
                        </Button> */}


                        {card.question !== 'question fake' && (

                            <BtnAll name='Show answer' style={styleBtnShowAnswer} onClick={() => setIsChecked(true)}/>


                            // <Button onClick={() => setIsChecked(true)}>
                            //     Show answer
                            // </Button>


                        )}
                    </div>
                </CardActions>
            )}

            {isChecked && (
                <>
                    <p className={s.answer}><b>Answer</b>: ' {card.answer} '</p>

                <div className={s.wrapForm}>

                    <FormControl component="fieldset">
                        <FormLabel style={styleForLabel} component="legend">
                            Rate yourself:
                        </FormLabel>

                        <RadioGroup aria-label='Rate' name='radio-buttons-group'>
                            {grades.map((g: string, i: number) => (
                                <MyFormControlLabel style={{marginBottom:12}}
                                  /* A lot of thought */
                                    key={i}
                                    value={i + 1}
                                    control={<BpRadio/>}
                                    label={g}
                                    onChange={() => setGrade(i + 1)}
                                />

                                // <FormControlLabel style={{marginBottom:12}}
                                // /* A lot of thought */
                                //     key={i}
                                //     value={i + 1}
                                //     control={<Radio/>}
                                //     label={g}
                                //     onChange={() => setGrade(i + 1)}
                                // />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>
                    <CardActions>

                        <BtnAll name='Cancel' style={styleBtnCancel} onClick={() => {
                            history.goBack()
                        }}/>
                        {/* <Button onClick={() => {
                            history.goBack()
                        }}>Cancel</Button> */}

                        <BtnAll name='Next' style={styleBtnNext} onClick={onNextHandler}/>
                        {/* <Button onClick={onNextHandler}>Next</Button> */}
                    </CardActions>
                </>
            )}
        </Card>
    )
}
