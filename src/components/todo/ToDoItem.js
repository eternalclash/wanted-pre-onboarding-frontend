import {memo,useCallback, useContext, useState} from 'react'
import { dispatchContext } from '../../context/ToDoContext'
import { deleteTodo,updateTodo } from '../../api/todo'
import { BiCheckboxChecked,BiCheckbox} from 'react-icons/bi';
import React from 'react';

const TodoItem = ({ list }) => {
    const [modifyToggle, setModifyToggle] = useState(false);
    const [content, setContent] = useState(list);
  
    const dispatch = useContext(dispatchContext);
  
    const handleTodoUpdate = useCallback(
      (content) => {
        updateTodo(content.id, content.todo, content.isCompleted)
          .then((res) => {
            dispatch({ type: "EDIT", todo: res.data });
          })
          .catch((err) => {
            throw new Error(err);
          });
      },
      [list, content]
    );
  
    const handleTodoDelete = useCallback(
      (id) => {
        deleteTodo(id)
          .then((res) => {
            dispatch({ type: "DELETE", id });
          })
          .catch((err) => {
            throw new Error(err);
          });
      },
      [list]
    );
  
    const onInputChange = useCallback(
      (e) => {
        setContent({ ...content, todo: e.target.value });
      },
      [content]
    );
  
    const onCheckClick = () => {
      setContent({ ...content, isCompleted: !list.isCompleted });
      handleTodoUpdate({ ...content, isCompleted: !list.isCompleted });
    };
  
    const handleCompleteBtnClick = () => {
      if (!content.todo) {
        return;
      }
      handleTodoUpdate(content);
      setModifyToggle(false);
    };
  
    const handleCancelBtnClick = () => {
      setContent({ ...content, todo: list.todo });
      setModifyToggle(false);
    };
  
    return (
      <div >
        {modifyToggle ? (
          <>
            <div ></div>
            <input
              defaultValue={list.todo}
              autoFocus

              onChange={onInputChange}
            />
            <button onClick={handleCompleteBtnClick} >
              완료
            </button>
            <button  onClick={handleCancelBtnClick}>
              취소
            </button>
          </>
        ) : (
          <div style={{display:"flex"}}>
 <div isCompleted={list.isCompleted} onClick={(e) => onCheckClick(e)}> 
       {
        list.isCompleted?<div style={{color:"black",display:"flex",alignItems:"center",cursor:"pointer"}}><div>{content.todo}</div><BiCheckboxChecked size={30}/>  </div> :<div style={{color:"grey",display:"flex",alignItems:"center",cursor:"pointer"}}><div>{content.todo}</div><BiCheckbox size={30}/></div>
       }
            
 </div>
  
            <button onClick={() => setModifyToggle(true)}>
              수정
            </button>
            <button

              onClick={() => {
                handleTodoDelete(content.id);
              }}
            >
              삭제
            </button>
          </div>
        )}

      </div>
    );
  };
  
  export default memo(TodoItem);
  