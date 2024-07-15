import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
  
import kitchen1 from '../assets/images/kitchens/IMG-20240514-WA0014.jpg'
import kitchen2 from '../assets/images/kitchens/IMG-20240514-WA0017.jpg'
import kitchen3 from '../assets/images/kitchens/IMG-20240514-WA0019.jpg'
import kitchen4 from '../assets/images/kitchens/IMG-20240514-WA0020.jpg'
import kitchen5 from '../assets/images/kitchens/IMG-20240514-WA0021.jpg'
import kitchen6 from '../assets/images/kitchens/IMG-20240514-WA0023.jpg'
import kitchen7 from '../assets/images/kitchens/IMG-20240515-WA0003.jpg'
import kitchen8 from '../assets/images/kitchens/IMG-20240515-WA0004.jpg'
import kitchen9 from '../assets/images/kitchens/IMG-20240515-WA0005.jpg'
import kitchen10 from '../assets/images/kitchens/IMG-20240515-WA0006.jpg'
import kitchen11 from '../assets/images/kitchens/IMG-20240515-WA0007.jpg'

import bedroom1 from '../assets/images/bedrooms/IMG-20240514-WA0015.jpg'
import bedroom2 from '../assets/images/bedrooms/IMG-20240514-WA0016.jpg'
import bedroom3 from '../assets/images/bedrooms/IMG-20240514-WA0018.jpg'
import bedroom4 from '../assets/images/bedrooms/IMG-20240514-WA0022.jpg'
import bedroom5 from '../assets/images/bedrooms/IMG-20240514-WA0025.jpg'
import bedroom6 from '../assets/images/bedrooms/IMG-20240514-WA0026.jpg'
import bedroom7 from '../assets/images/bedrooms/IMG-20240514-WA0028.jpg'
import bedroom8 from '../assets/images/bedrooms/IMG-20240514-WA0029.jpg'
import bedroom9 from '../assets/images/bedrooms/IMG-20240514-WA0030.jpg'
import bedroom10 from '../assets/images/bedrooms/IMG-20240514-WA0031.jpg'
import bedroom11 from '../assets/images/bedrooms/IMG-20240514-WA0032.jpg'
import bedroom12 from '../assets/images/bedrooms/IMG-20240514-WA0033.jpg'
import bedroom13 from '../assets/images/bedrooms/IMG-20240514-WA0034.jpg'
import bedroom14 from '../assets/images/bedrooms/IMG-20240514-WA0035.jpg'
import bedroom15 from '../assets/images/bedrooms/IMG-20240514-WA0036.jpg'
import bedroom16 from '../assets/images/bedrooms/IMG-20240514-WA0037.jpg'
import bedroom17 from '../assets/images/bedrooms/IMG-20240514-WA0038.jpg'
import bedroom18 from '../assets/images/bedrooms/IMG-20240514-WA0039.jpg'

const bedrooms = [
    bedroom1, bedroom2, bedroom3, bedroom4, bedroom5, bedroom6, bedroom7, bedroom8, bedroom9, bedroom10, bedroom11, bedroom12, bedroom13, bedroom14, bedroom15, bedroom16, bedroom17, bedroom18
]

const kitchens = [ 
    kitchen1, kitchen2, kitchen3, kitchen4, kitchen5, kitchen6, kitchen7, kitchen8, kitchen9, kitchen10, kitchen11
]

const Projects = () => {
  return (
    <section className='flex flex-col justify-center items-center m-4' id='portfolio'>
        <h1 className='text-black text-4xl'>Projects</h1>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className=''>
                <AccordionTrigger className='text-center'>CLICK HERE TO TOGGLE PROJECT GALLERY</AccordionTrigger>
                <AccordionContent>
                    <div className=''>
                    <Tabs defaultValue="account" className="flex justify-center flex-col">
                        <TabsList className='text-2xl'>
                            <TabsTrigger value="account" className='text-2xl'>Kitchens</TabsTrigger>
                            <TabsTrigger value="password"className='text-2xl'>Bedrooms</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {kitchens.map((kitchen, index) => (
                                    <div key={index} className="relative h-96">
                                        <img src={kitchen} alt="kitchen" className="h-full w-full max-w-full rounded-lg object-cover object-center hover:2xl:" />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="password">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {bedrooms.map((bedroom, index) => (
                                    <div key={index} className="relative h-96">
                                        <img src={bedroom} alt="bedroom" className="h-full w-full max-w-full rounded-lg object-cover object-center hover:2xl:" />
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                    </div>

                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </section>
  )
}

export default Projects