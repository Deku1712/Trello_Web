
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import { useColorScheme } from '@mui/material/styles'
function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}
function App() {
  return (
    <>
      <ModeToggle />
      <div>ngoc tam</div>
      <Button variant="text">Hello world</Button>
      <Button variant="contained">Hello world</Button>
      <Button variant="outlined">Hello world</Button>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />

    </>
  )
}

export default App
