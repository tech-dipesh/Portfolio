export default function Errorpage({ error, name }) {
  return error[name]  && (
    <div className='text-red-500 flex justify-center text-2xl'>{error[name]}</div>
  )
}
