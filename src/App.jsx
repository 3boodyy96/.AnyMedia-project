import RoundedButton from './components/roundedButton.jsx';
import NormalButton from './components/normalButton.jsx';
export default function App() {
  return (
    <div className='justify-center gap-2 flex items-center'>
      <RoundedButton imgSrc="./src/assets/video-icon.png" altText="video"/>
      <NormalButton width="100px" height="500px"/>
    </div>
  )
}