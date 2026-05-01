import RoundedButton from './components/roundedButton.jsx';
import NormalButton from './components/normalButton.jsx';
import Frame from './components/frame.jsx';
export default function App() {
  return (
    <div className='justify-center gap-2 flex items-center'>
      <RoundedButton imgSrc="./src/assets/video-icon.png" altText="video"/>
      <NormalButton w="10px" h="15px" text="click me"/>
      <Frame w="200px" h="150px"
      items={<p>Sample Item</p>}/>
    </div>
  )
}