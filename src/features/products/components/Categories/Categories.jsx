import { useGetCategoriesQuery } from '../../services/products';
import { NavLink } from 'react-router';
import { Loading, Error } from '@/components/ui';
import './Categories.css';

export function Categories () {
    const { data, error, isLoading } = useGetCategoriesQuery();

    if (isLoading) return <Loading />;
    if (error) return <Error />;

    return (
        <div className='categories'>
            <h3 className='categories__title'>Categories</h3>
            <ul className='categories__list'>
                <li key="all">
                    <NavLink 
                        to={ '/catalog' }
                        className={({ isActive }) => isActive ? "active" : "" }
                        end
                    >
                        All
                    </NavLink>
                </li>
                { 
                    data?.map((cat) => {
                        return (
                            <li key={ cat.slug }>
                                <NavLink 
                                    to={ `/catalog/${cat.slug}` }
                                    className={({ isActive }) => isActive ? "active" : "" }
                                >
                                    { cat.name }
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}