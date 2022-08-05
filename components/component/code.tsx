import { FC } from "react";
import { a11yDark, a11yLight, anOldHope, arta, atomOneDark, atomOneLight, CodeBlock, codepen, CopyBlock, dracula, far, github, googlecode, hybrid, irBlack, monoBlue, monokai, monokaiSublime, nord, obsidian, ocean, paraisoDark, paraisoLight, railscast, shadesOfPurple, solarizedDark, solarizedLight, sunburst, tomorrow, tomorrowNight, tomorrowNightBlue, vs2015, xt256, zenburn } from "react-code-blocks";
interface Props {
  text: string
  language: string
}
export const Code:FC<Props> = ({text, language}) => {
  return(
    <CopyBlock
          text={text}
          language={language}
          showLineNumbers
          theme={monokai}
          // highlight="-"
          wrapLines={true}

          codeBlock
        />
  )
}