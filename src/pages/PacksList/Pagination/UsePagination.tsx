import s from "./UsePagination.module.css"
import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
  listStyle: 'none',
  
  margin: 0,
  display: 'flex',
  alignItems: 'center'
});

export default function UsePagination() {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <div className={s.usePagination}>    
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                style={{
                  // fontWeight: selected ? 'bold' : undefined,
                  backgroundColor: selected ? '#21268F' : 'transparent',
                  color: selected ?  '#F2F5F7' : '#2D2E46',
                  width: '24px',
                  height: '24px',
                  borderRadius: '3px',
                  border: 'none',
                  fontFamily: 'Lato',
                  fontSize: '12px',
                  lineHeight: '120%',
                  cursor: 'pointer',
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li
          style={{
            marginRight: '15px',
           
          }}
           key={index}>{children}</li>;
        })}
      </List>
    </nav>
    </div>
  );
  
}