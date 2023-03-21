import * as React from 'react'
import ReactDom from 'react-dom'

const App = () => {
  return (
    <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-1/2">
        <div class="p-6 text-center shadow-md bg-white rounded-md">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vitae similique laborum odio laboriosam. Iure aliquid minima reprehenderit incidunt corrupti nostrum, placeat provident id minus consequuntur facere, officia nobis ipsam.</p>
          <a href="" class="py-2 px-4 text-white bg-green-500 border-green-600 rounded-md mt-4 inline-block">click me</a>
        </div>
      </div>
    </div>
  </div>
  )
}

const reactRoot = document.getElementById('react-root')
if (reactRoot) {
  ReactDom.render(<App/>, reactRoot)
} else {
  console.log('No root element found')
}

