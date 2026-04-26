import RoundedButton from './components/roundedButton.jsx';
import NormalButton from './components/normalButton.jsx';
export default function App() {
  return (
    <div>
      <RoundedButton imgSrc="./src/assets/video-icon.png" altText="video"/>
      <NormalButton width="30" height="40"/>
    </div>
  )
}