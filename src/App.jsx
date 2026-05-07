import DropDownMenu from '../src/components/dropDownMenu.jsx';
// import LoginPage from './signin-login_page.jsx';
export default function App() {
  return (
    // <div className='justify-center gap-2 flex items-center'>
    //   <RoundedButton imgSrc="./src/assets/video-icon.png" altText="video"/>
    //   <NormalButton w="10px" h="15px" text="click me"/>
    //   <Frame w="200px" h="150px"
    //   items={<p>Sample Item</p>}/>
    // </div>
    <DropDownMenu options={["test\n",'test1\n',';\n']} text={'hello'} id={'dropdownTest'}/>
    /* <LoginPage /> */
  )
}