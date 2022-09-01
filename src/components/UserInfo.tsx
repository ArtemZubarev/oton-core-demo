import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Box = styled('div')(({ theme }) => ({
  display: 'flex',
  'justifyContent': 'center',
  'marginTop': '50px'
}));

function useUser(auth: any) {
  const { data, error } = useSWR({
    url: '/user/info',
    data: {
      auth
    }
  }, fetcher);

  return {
    user: data ? data.data : {},
    isLoading: !error && !data,
    isError: error
  };
};

export default function UserInfo() {
  const auth = '1539521400.84TsqHuSqB0KGTJmJutBEUVD3j8GaNWLL7K6iUqEdBD9DC8sDK';
  const { user, isLoading, isError } = useUser(auth);
  console.log(isLoading)

  if (isLoading) {
    return (
      <Box>
        <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton variant="rectangular" width={250} height={250} />
          <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Stack>
      </Box>
    )
  } else {
    return (
      <Box>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="250"
            image="https://i.pravatar.cc/345"
            alt="user photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { user.name }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Id: {user.id}
              <br/>
              Email: {user.email}
              <br/>
              Reg date: {new Date(user.date_reg ? user.date_reg * 1000 : 0).toLocaleDateString("en-US")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    )
  }
}