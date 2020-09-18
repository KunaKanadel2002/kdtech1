import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

const AddItems = (props) => {



   return <ul className="uList combiner"><li className="list">{props.value}</li><CancelIcon id={props.id} onClick={()=>{
      props.Delete(props.id);
   }}
    /></ul>



}

export default AddItems;