import { useGetCategoriesQuery } from '../../services/products';
import { NavLink, useLocation } from 'react-router';
import { Loading, Error } from '@/components/ui';
import './Categories.css';

export function Categories(props) {
    const { data, error, isLoading } = useGetCategoriesQuery();

    const location = useLocation();

    if (isLoading) return <Loading />;
    if (error) return <Error />;

    return (
        <div {...props} >
            <ul className='categories__list'>
                <li key='all'>
                    <NavLink 
                        to={{
                            pathname: '/catalog',
                            search: location.search,
                        }}
                        className={({ isActive }) => isActive ? 'active' : '' }
                        onClick={ props.onClick }
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
                                    to={{
                                        pathname: `/catalog/${cat.slug}`,
                                        search: location.search,
                                    }}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                    onClick={props.onClick}
                                >
                                    {cat.name}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}