import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevance
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
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average rating</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector