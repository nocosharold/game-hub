import { HStack, List, ListItem, Image, Text, CircularProgress, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null
    if (isLoading) return <CircularProgress isIndeterminate trackColor='transparent' color='gray.300' />;

    return (
        <List>
            {data.map((genre) => {
                return (
                    <ListItem key={genre.id} paddingY='8px'>
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default GenreList;
