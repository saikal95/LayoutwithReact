import React from "react";
import TodoItem  from "./TodoItem";
import PropTypes from 'prop-types';

const styles = {
  ul: {
    listStyle: 'none',
    color: 'red',
    margin: '0'
  }

}

function TodoList(props){
  return(
    <ul style={styles.ul}>
      {props.myAr.map((todo, idx)=> {
        return<TodoItem todo={todo} key={todo.id} index={idx}/>
      })}
    </ul>
  )
}

TodoList.propTypes = {
  myAr: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default TodoList;