type Props = { text: string, additionalStyles: string }

export default function GreenButton({ text, additionalStyles = `` }: Props) {
  return <button className={`${additionalStyles} h-10 py-2 px-3 text-white bg-green-500 rounded-sm`}><b>{text}</b></button>
}