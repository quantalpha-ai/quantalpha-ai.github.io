import type { Metadata } from 'next'
import { Logo } from "@/svg/QuantAlphaAI"
import { TypingCursor } from "./components/TypingCursor"
import clsx from "clsx"

const columnStyle = "w-[90%] md:w-[80%] lg:w-[800px] mx-auto"
const regularText = "text-base sm:text-lg md:text-xl text-pretty"
const smallText = "text-sm sm:text-base text-pretty"
const headingText = "text-xl sm:text-2xl font-medium text-[#0E638E] mb-2 md:mb-3 lg:mb-4"
const mainContentRowsStyle = "flex flex-col gap-8 md:gap-12 lg:gap-16 my-8 sm:my-12 md:my-20"
const proseStyle = "flex flex-col gap-6"
const colorBoxStyle = "bg-[#BF523D]/5 p-4 md:p-6 rounded-lg border-2 border-[#BF523D]/10"

export const metadata: Metadata = {
  title: 'QuantAlpha AI',
  description: 'Deploying cutting-edge, rapidly advancing machine learning technologies, data analytics, artificial intelligence, deep learning, and generative AI in quantitative trading.',
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-[#333] bg-[#F0DFCE] border-t-[6px] border-[#0E638E] pt-4">
      <div className={mainContentRowsStyle}>
        <div>
          <div className={clsx(columnStyle, "flex justify-start items-center")}>
            <Logo />
          </div>
          <div className={clsx(columnStyle, "mt-0 sm:mt-2 md:mt-4 flex flex-col text-[#0E638E]")}>
            <TypingCursor />
          </div>
        </div>
        <div className={clsx(columnStyle, proseStyle)}>
          <p className={regularText}>
            QuantAlpha is a software engineering company dedicated to developing cutting-edge technologies and software
            systems that enable Quant Finance 2.0 for Digital Assets.
          </p>
          <p className={regularText}>
            We harness traditional quant methodologies - data analytics, technical analysis, statistical methods - to
            generate alpha by uncovering trading signals and market patterns.
          </p>
          <p className={regularText}>
            We overlay Quant Finance 2.0 to enhance pattern detection and enable us to extract alpha from unstructured
            text data, such as news, events, social media.
          </p>
        </div>
        <div className={clsx(columnStyle)}>
          <h2 className={headingText}>What is Quant Finance 2.0?</h2>
          <p className={regularText}>
            Deploying cutting-edge, rapidly advancing machine learning technologies, data analytics, artificial
            intelligence, deep learning, and generative AI in quantitative trading.
          </p>
        </div>
        <div className={clsx(columnStyle, colorBoxStyle)}>
          <h2 className={headingText}>About Us</h2>
          <div className={proseStyle}>
            <p className={regularText}>
              QuantAlpha is a software engineering company dedicated to developing cutting-edge technologies and
              software systems that enable Quant Finance 2.0 for Digital Assets.
            </p>
            <p className={regularText}>
              We harness traditional quant methodologies - data analytics, technical analysis, statistical methods - to
              generate alpha by uncovering trading signals and market patterns.
            </p>
            <p className={regularText}>
              We overlay Quant Finance 2.0 to enhance pattern detection and enable us to extract alpha from unstructured
              text data, such as news, events, social media.
            </p>
          </div>
        </div>
      </div>

      <footer className="w-full pb-5 mt-auto row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="border-b border-[#bbbbbb] w-full h-[1px]" />
        <div className={clsx(columnStyle, "flex flex-col gap-1")}>
          <p className={smallText}>©2024 QuantAlpha Pte. Ltd.</p>
          <p className={smallText}>From the creators of CoinAlpha and Hummingbot</p>
          <a
            className={clsx(smallText, "text-[#0E638E] hover:underline hover:underline-offset-4")}
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
