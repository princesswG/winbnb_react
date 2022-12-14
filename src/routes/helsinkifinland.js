import React from "react";
import { Navbar } from "../components/Navbar";

import{
  Link,
}
from "react-router-dom";


import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HelsinkiFinland() {
  return (
<>
       <Navbar/>   
       
    <Menu as="div" className="relative ml-10 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex ml-10 w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          LOCATION
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {/* <Menu.Item>
              {({ active }) => (
                
                <Link to={"/helsinkifinland"}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 flex' : 'text-gray-700 flex',
                    'block px-4 py-2  text-sm'
                     )}>
                <img class="w-5 h-5 mr-5 rounded-full" src="location.png" alt="Location"/>
              Helsinki, Finland
                </Link>
                
              )}
            </Menu.Item> */}
            <Menu.Item>
              {({ active }) => (
                <Link to={"/turkufinland"}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 flex' : 'text-gray-700 flex',
                    'block px-4 py-2  text-sm'
                  )}
                >
                      <img class="w-5 h-5 mr-5 rounded-full" src="location.png" alt="Location"/>
                Sinkor, Liberia
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to={"/oulufinland"}
                
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 flex' : 'text-gray-700 flex',
                    'block px-4 py-2  text-sm'
                  )}
                >
                      <img class="w-5 h-5 mr-5 rounded-full" src="location.png" alt="Location"/>
                  CongoTown, Liberia
                </Link>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <Link to={"/vaasafinland"}
                  
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 flex' : 'text-gray-700 flex',
                      'block w-full px-4 py-2  text-left text-sm'
                    )}
                  >
                      <img class="w-5 h-5 mr-5 rounded-full" src="location.png" alt="Location"/>
                    Paynesville, Finland
                  </Link>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    
    
    </>
   
  )
 
}
