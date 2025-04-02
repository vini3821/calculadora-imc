import { Box, Card, Typography } from '@mui/material';

function App() {


  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'flex-start'}
      width={'100vw'}
      height={'100vh'}
      
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          marginTop: '144px',
          marginX:'16px'

        }}
      >
        {/*Titulo */}
        <Box
          marginY={'16px'}
        >
          <Typography variant='h5' fontWeight={"700"}>
            Calculadora IMC
          </Typography>
        </Box>
        {/*Entradas */}

        <Box>
          entradas
        </Box>

        {/*Resultado */}

        <Box>
          resultado
        </Box>

      </Card>
    </Box>

  )
}

export default App
