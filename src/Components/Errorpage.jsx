export default function Errorpage({ error, name }) {
  return error[name]  && (
    <div className='text-red-500 flex justify-center text-lg md:text-2xl px-4 text-center'>{error[name]}</div>
  )
}
