import { HStack, List, ListItem, Image, Text, CircularProgress } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
                            <Text fontSize='lg'>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default GenreList;
