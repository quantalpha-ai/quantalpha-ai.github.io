import { Logo } from "@/svg/QuantAlphaAI"
import { TypingCursor } from "./components/TypingCursor"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-[#333] bg-[#F0DFCE] border-t-[6px] border-[#0E638E] pt-4">
      <div className="w-[90%] md:w-[80%] lg:w-[800px] mx-auto flex justify-start items-center">
        <Logo />
      </div>
      <div className="border-b border-[#bbbbbb] w-full h-[1px] mt-4" />
      <div className="w-[90%] md:w-[80%] lg:w-[800px] mx-auto mt-16 flex flex-col text-[#0E638E]">
        <TypingCursor />
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[800px] mx-auto flex flex-col gap-6 mt-10">
        <p className="text-lg sm:text-xl text-pretty">
          QuantAlpha is a software engineering company dedicated to developing cutting-edge technologies and software
          systems that enable Quant Finance 2.0 for Digital Assets.
        </p>
        <p className="text-lg sm:text-xl text-pretty">
          We harness traditional quant methodologies - data analytics, technical analysis, statistical methods - to
          generate alpha by uncovering trading signals and market patterns.
        </p>
        <p className="text-lg sm:text-xl text-pretty">
          We overlay Quant Finance 2.0 to enhance pattern detection and enable us to extract alpha from unstructured
          text data, such as news, events, social media.
        </p>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[800px] mx-auto flex flex-col gap-3 mt-10 bg-[#BF523D]/5 p-4 rounded-lg border-2 border-[#BF523D]/20">
        <h5 className="text-2xl font-medium text-[#0E638E]">What is Quant Finance 2.0?</h5>
        <p className="text-lg sm:text-xl text-pretty">
          Deploying cutting-edge, rapidly advancing machine learning technologies, data analytics, artificial
          intelligence, deep learning, and generative AI in quantitative trading.
        </p>
      </div>

      <footer className="w-full pb-4 mx-auto mt-auto row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="border-b border-[#bbbbbb] w-full h-[1px]" />
        <div className="w-[90%] md:w-[80%] lg:w-[800px] flex flex-col">
          <div className="w-full flex justify-between items-center">
            <p>©2024 QuantAlpha Pte. Ltd.</p>
            <p>From the creators of CoinAlpha and Hummingbot</p>
          </div>
          <a
            className="text-[#0E638E] mt-2 flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:contact@quantalpha.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact@quantalpha.ai
          </a>
        </div>
      </footer>
    </div>
  )
}
