import Typical from 'react-typical'

export default function TypingAnimation () {
    return(
        <Typical
            steps={[
            '...',
            10000,
            'Que Je Web',
            10000,
            'Querné Jérémy Web',
            10000,
            'Que Je Web',
            10000,
            '...',
            10000,
            ]}
            wrapper="p"
            loop={Infinity}
        />
    )
}