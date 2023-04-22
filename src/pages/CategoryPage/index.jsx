import React from 'react';
import { useSelector} from 'react-redux';
import CategoryItem from '../../components/CategoryItem';
import s from './style.module.css';

export default function CategoryPage() {

  const categories = useSelector(state => state.category);

  return (
    <div>
        <p className={s.header}>Categories</p>
        <div className={s.container}>
        {
          categories.map(item => <CategoryItem key={item} {...item}/>)
        }
      </div>
      </div>
  )
}
