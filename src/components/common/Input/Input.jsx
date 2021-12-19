import s from "./Input.module.css"


const styles = {
  resize: {
      fontSize: '50px',
  }
}

const Input = (props) => {

  const { classes } = props;

  return (
      <Input
          value={props.value}
          placeholder={'$'}
          variant={'outlined'}
          onChange={props.onChange}
          autoFocus
          InputProps={{
              classes: {
                  input: classes.resize
              }
          }}
      />
  );
};

export default withStyles(styles)(Input);


// export default function Input() {
//   return (
//     <div className={s.input}>
            
//     </div>
//   );
// }
