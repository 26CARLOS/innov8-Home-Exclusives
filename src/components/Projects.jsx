import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
  
  import kitchen1 from '../assets/images/kitchens/kitchen_1.jpg'
  import kitchen2 from '../assets/images/kitchens/kitchen_2.jpg'  
  import kitchen3 from '../assets/images/kitchens/kitchen_3.jpg'  
  import kitchen4 from '../assets/images/kitchens/kitchen_4.jpg'  
  import kitchen5 from '../assets/images/kitchens/kitchen_5.jpg'  
  import kitchen6 from '../assets/images/kitchens/kitchen_6.jpg'  
  import kitchen7 from '../assets/images/kitchens/kitchen_7.jpg'  
  import kitchen8 from '../assets/images/kitchens/kitchen_8.jpg'  
  import kitchen9 from '../assets/images/kitchens/kitchen_9.jpg'  
  import kitchen10 from '../assets/images/kitchens/kitchen_10.jpg'
  import kitchen11 from '../assets/images/kitchens/kitchen_11.jpg'
  import kitchen12 from '../assets/images/kitchens/kitchen_12.jpg'
  import kitchen13 from '../assets/images/kitchens/kitchen_13.jpg'
  import kitchen14 from '../assets/images/kitchens/kitchen_14.jpg'
  import kitchen15 from '../assets/images/kitchens/kitchen_15.jpg'
  import kitchen16 from '../assets/images/kitchens/kitchen_16.jpg'
  import kitchen17 from '../assets/images/kitchens/kitchen_17.jpg'
  import kitchen18 from '../assets/images/kitchens/kitchen_18.jpg'
  import kitchen19 from '../assets/images/kitchens/kitchen_19.jpg'
  import kitchen20 from '../assets/images/kitchens/kitchen_20.jpg'
  import kitchen21 from '../assets/images/kitchens/kitchen_21.jpg'
  import kitchen22 from '../assets/images/kitchens/kitchen_22.jpg'
  import kitchen23 from '../assets/images/kitchens/kitchen_23.jpg'
  import kitchen24 from '../assets/images/kitchens/kitchen_24.jpg'
  import kitchen25 from '../assets/images/kitchens/kitchen_25.jpg'
  import kitchen26 from '../assets/images/kitchens/kitchen_26.jpg'
  import kitchen27 from '../assets/images/kitchens/kitchen_27.jpg'
  import kitchen28 from '../assets/images/kitchens/kitchen_28.jpg'
  import kitchen29 from '../assets/images/kitchens/kitchen_29.jpg'
  import kitchen30 from '../assets/images/kitchens/kitchen_30.jpg'
  import kitchen31 from '../assets/images/kitchens/kitchen_31.jpg'
 
  import bedroom1 from '../assets/images/bedrooms/bedroom_1.jpg'
  import bedroom2 from '../assets/images/bedrooms/bedroom_2.jpg'
  import bedroom3 from '../assets/images/bedrooms/bedroom_3.jpg'
  import bedroom4 from '../assets/images/bedrooms/bedroom_4.jpg'
  import bedroom5 from '../assets/images/bedrooms/bedroom_5.jpg'
  import bedroom6 from '../assets/images/bedrooms/bedroom_6.jpg'
  import bedroom7 from '../assets/images/bedrooms/bedroom_7.jpg'
  import bedroom8 from '../assets/images/bedrooms/bedroom_8.jpg'
  import bedroom9 from '../assets/images/bedrooms/bedroom_9.jpg'
  import bedroom10 from '../assets/images/bedrooms/bedroom_10.jpg'
  import bedroom11 from '../assets/images/bedrooms/bedroom_11.jpg'
  import bedroom12 from '../assets/images/bedrooms/bedroom_12.jpg'
  import bedroom13 from '../assets/images/bedrooms/bedroom_13.jpg'
  import bedroom14 from '../assets/images/bedrooms/bedroom_14.jpg'
  import bedroom15 from '../assets/images/bedrooms/bedroom_15.jpg'

const bedrooms = [
    bedroom1, bedroom2, bedroom3, bedroom4, bedroom5, bedroom6, bedroom7, bedroom8, bedroom9, bedroom10, bedroom11, bedroom12, bedroom13, bedroom14, bedroom15
]

const kitchens = [kitchen1,
    kitchen2,
    kitchen3,
    kitchen4,
    kitchen5,
    kitchen6,
    kitchen7,
    kitchen8,
    kitchen9,
    kitchen10,
    kitchen11,
    kitchen12,
    kitchen13,
    kitchen14,
    kitchen15,
    kitchen16,
    kitchen17,
    kitchen18,
    kitchen19,
    kitchen20,
    kitchen21,
    kitchen22,
    kitchen23,
    kitchen24,
    kitchen25,
    kitchen26,
    kitchen27,
    kitchen28,
    kitchen29,
    kitchen30,
    kitchen31,

]

const Projects = () => {
  return (
    <section className='flex flex-col justify-center items-center m-4' id='portfolio'>
        <h1 className='text-black text-4xl'>Projects</h1>
        <p className='text-center py-4'>Have a look at the homes we've improved in the past. Scroll through our gallery.</p>
        <div className=''>
            <Tabs defaultValue="kitchens" className="flex justify-center flex-col">
                <TabsList className='text-2xl'>
                    <TabsTrigger value="kitchens" className='text-2xl'>Kitchens</TabsTrigger>
                    <TabsTrigger value="bedrooms"className='text-2xl'>Bedrooms</TabsTrigger>
                </TabsList>
                <TabsContent value="kitchens">
                    <Carousel className="w-full max-w-xs md:max-w-xl">
                        <CarouselContent>
                        {kitchens.map((kitchen, index) => (
                            <CarouselItem key={index} className="relative h-96">
                                <img src={kitchen} alt="kitchen" className="w-full rounded-lg scale-200" />
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious className='hidden md:block'/>
                        <CarouselNext className='hidden md:block'/>
                    </Carousel>
                </TabsContent>
                <TabsContent value="bedrooms">
                    <Carousel className="w-full max-w-xs md:max-w-xl">
                        <CarouselContent>
                        {bedrooms.map((kitchen, index) => (
                            <CarouselItem key={index} className="relative h-96">
                                <img src={kitchen} alt="kitchen" className="h-full w-full max-w-full rounded-lg object-cover object-center" />
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious className='hidden md:block'/>
                        <CarouselNext className='hidden md:block'/>
                    </Carousel>
                </TabsContent>
            </Tabs>
            </div>
    </section>
  )
}

export default Projects