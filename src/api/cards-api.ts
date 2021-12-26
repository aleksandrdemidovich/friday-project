import {instance} from "./instanceAPI";
import {NewCardType} from "../redux/cardPacksReducer";


export type CardsQueryRequestType = {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id: string
    min?: number
    max?: number
    sortCards?: string | null
    page?: number
    pageCount?: number
}

export type EditCardBodyType = {
    _id: string
    question?: string
}


export const cardsAPI = {
    getCards(data: CardsQueryRequestType) {
        return instance.get(`cards/card`, {params: data})
    },
    postCards(data: NewCardType) {
        return instance.post(`cards/card`,  {card: data})
    },
    deleteCards(idCard: string) {
        return instance.delete(`cards/card?id=${idCard}`)
    },
    editCard(card: EditCardBodyType) {
        return instance.put('cards/card', {card})
    },
    putGradeCard(grade: number, card_id: string) {
        return instance.put('cards/grade', {grade, card_id})
    }
}