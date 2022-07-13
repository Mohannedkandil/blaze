import { MdOutlineEdit, MdOutlineCloudUpload, MdImageSearch, IoShapesOutline } from 'react-icons/all'
import { Tab } from '@headlessui/react'
export const LeftBar = () => {

    return (
        <Tab.Group>
        <div className='w-full h-screen bg-[#f3f8fe] flex'>
        <div className="h-screen w-24 bg-[#7F5EE3]">
            <div className='pt-10'>
                <div className="flex flex-col items-center">
                    <div className='flex flex-col items-center'>
                        <Tab.List className='flex flex-col items-center'>
                            <Tab className='flex flex-col items-center py-5'>
                                <div className='text-white text-2xl'>
                                    <MdOutlineEdit />
                                </div>
                                <p className='text-slate-200'>Home</p>
                            </Tab>
                            <Tab className='flex flex-col items-center py-5'>
                                <div className='text-white text-2xl'>
                                    <IoShapesOutline />
                                </div>
                                <p className='text-slate-200'>Elements</p>
                            </Tab>
                            <Tab className='flex flex-col items-center py-5'>
                                <div className='text-white text-2xl'>
                                    <MdImageSearch />
                                </div>
                                <p className='text-slate-200'>Images</p>
                            </Tab>
                            <Tab className='flex flex-col items-center py-5'>
                                <div className='text-white text-2xl'>
                                    <MdOutlineCloudUpload />
                                </div>
                                <p className='text-slate-200'>Upload</p>
                            </Tab>
                        </Tab.List>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-5'>
            <Tab.Panels>
                <Tab.Panel>Home</Tab.Panel>
                <Tab.Panel>Elements</Tab.Panel>
                <Tab.Panel>Images</Tab.Panel>
                <Tab.Panel>Upload</Tab.Panel>
            </Tab.Panels>
        </div>
        </div>
        </Tab.Group>
    )
}