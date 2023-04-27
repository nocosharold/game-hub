import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList 
                maxH="500px" 
                overflowY='auto' 
                css={{
                "&::-webkit-scrollbar": {
                    width: "8px",
                    borderRight: "8px solid transparent"
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#9496A1",
                    borderRadius: "8px",
                    width: "16px",
                },
            }}>
                {sortOrders.map(order => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                    {order.label}
                </MenuItem>)}
                
            </MenuList>
        </Menu>
    )
}

export default SortSelector