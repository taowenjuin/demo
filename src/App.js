
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MyLayout from './components/MyLayout';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import { message } from 'antd';

const App = () => {
  const [textIndex, setTextIndex] = useState('');
  const [text, setText] = useState('');

  const [textOne, setTextOne] = useState('子菜单1-1');
  const [textTwo, setTextTwo] = useState('子菜单1-2');
  const [textThree, setTextThree] = useState('子菜单2-1');
  const [textFour, setTextFour] = useState('子菜单2-2');
  const changeItem = (textIndex, text) => {
    if (text) {
      setTextIndex(textIndex)
      setText(text)
    } else {
      message.error('不能为空！')
    }
  }
  useEffect(() => {
    switch (textIndex) {
      case 'one':
        setTextOne(text)
        break
      case 'two':
        setTextTwo(text)
        break
      case 'three':
        setTextThree(text)
        break
      case 'four':
        setTextFour(text)
        break
    }
  }, [text])
  return (
    <MyLayout
      textOne={textOne}
      textTwo={textTwo}
      textThree={textThree}
      textFour={textFour}
    >
      <Routes>
        <Route path='pageone/tabone' element={<PageOne changeItem={changeItem} textOne={textOne} />} />
        <Route path='pageone/tabtwo' element={<PageTwo changeItem={changeItem} textTwo={textTwo} />} />
        <Route path='pagetwo/tabone' element={<PageThree changeItem={changeItem} textThree={textThree} />} />
        <Route path='pagetwo/tabtwo' element={<PageFour changeItem={changeItem} textFour={textFour} />} />
      </Routes>
    </MyLayout>
  )
}
export default App
