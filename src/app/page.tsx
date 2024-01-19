import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white -z-10 justify-center">
      <div className='flex justify-center md:h-60 z-10'>
          <div className='lg:hidden md:w-100rem'>
            <img className='w-screen h-auto' src="/background-pattern-mobile.svg" alt="background pattern mobile" />
          </div>
          <div className='hidden lg:block'>
            <img className='w-screen' src="/background-pattern-desktop.svg" alt="background pattern desktop" />
          </div>
      </div>
      <Card className='w-[86%] lg:w-[60%] lg:-top-0 z-20 xl:w-[46%] md:top-14 sm:p-9 relative max-xl:-top-28 shadow-2xl'>
        <CardHeader>
          <CardTitle className='flex items-center font-bold text-3xl text-dark-purple sm:text-5xl'>
            <img className='mr-5 w-6 sm:w-9' src="/icon-star.svg" alt="star icon image" />
            FAQs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type='multiple' className='text-dark-purple'>
            <AccordionItem value='1'>
              <AccordionTrigger className='text-left font-bold'>
                What is Frontend Mentor, and how will it help me?
              </AccordionTrigger>
              <AccordionContent className='text-left text-grayish-purple font-medium'>
                  Frontend Mentor affers realistic coding challenges to help
                  developers improve their frontend coding skills with projects
                  in HTML, CSS and JavaScript. It's sultable for all levels and
                  ideal for portfolio building.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='2'>
              <AccordionTrigger className='text-left font-bold'>
                Is Frontend Mentor free?
              </AccordionTrigger>
              <AccordionContent className='text-grayish-purple font-medium'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Quisquam ab soluta, beatae quo maxime magni omnis vel accusantium 
                  rerum repudiandae nisi distinctio necessitatibus labore eum, 
                  repellat aut fugiat recusandae! Sed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='3'>
              <AccordionTrigger className='text-left font-bold'>
                Can i use Frontend Mentor projects in my portfolio?
              </AccordionTrigger>
              <AccordionContent className='text-grayish-purple font-medium'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Quisquam ab soluta, beatae quo maxime magni omnis vel accusantium 
                  rerum repudiandae nisi distinctio necessitatibus labore eum, 
                  repellat aut fugiat recusandae! Sed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='4'>
              <AccordionTrigger className='text-left font-bold'>
                How can I get help it I'm stuck on a challenge?
              </AccordionTrigger>
              <AccordionContent className='text-grayish-purple font-medium'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Quisquam ab soluta, beatae quo maxime magni omnis vel accusantium 
                  rerum repudiandae nisi distinctio necessitatibus labore eum, 
                  repellat aut fugiat recusandae! Sed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </main>
  )
}
