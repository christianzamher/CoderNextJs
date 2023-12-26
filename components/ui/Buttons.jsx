const Button = ({ children, className = '', ...args }) => {

  return (
      <button 
          className={`rounded-2xl py-2 px-4   text-center ${className}`} 
          {...args}
      >
          {children}
      </button>
  )
}

export default Button