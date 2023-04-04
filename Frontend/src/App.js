
import {Box,styled} from '@mui/material';

import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';




const Container = styled(Box)(({theme}) => ({
width: '60%',
margin: '40px auto 0 auto',
[theme.breakpoints.down('md')]:{
  width: '75%'
},
[theme.breakpoints.down('sm')]:{
  width: '80%'
}
}));

function App() {
  return (
    <Box>
      <Header />
      <Container> 
      
      <InfoHeader />
      <Articles />
      </Container>
    </Box>
  );
}

export default App;
