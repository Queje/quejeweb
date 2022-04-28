import Typical from 'react-typical'

export default function TypingAnimation () {
    return(
        <Typical
            steps={[
            '...',
            1000,
            'Que Je Web',
            1000,
            'Querné Jérémy Web',
            1000,
            'Que Je Web',
            1000,
            '...',
            1000,
            ]}
            wrapper="span"
            loop={Infinity}
        />
    )
}