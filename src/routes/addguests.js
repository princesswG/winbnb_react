import React from "react";
import { Navbar } from "../components/Navbar";


import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Addguests() {
  return (
<>
       <Navbar/>   
    <Menu as="div" className="relative ml-20 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex ml-10 w-full justify-center rounded-md 
        border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 
        shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 
        focus:ring-offset-2 focus:ring-offset-gray-100">
          GUEST<br/>4 guests
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
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 ',
                    'block px-4 py-2  text-sm'
                  )}
                >
                  
            <b>Adults</b><br/>Ages 13 or above
            <img class="w-5 h-5 mr-5 rounded-full" src="mins.jpg" alt="Location"/>
            <img class="w-5 h-5 ml-5 rounded-full" src="plus.jpg" alt="Location"/>


                </a>
               
              )}
            </Menu.Item>
          
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 ' : 'text-gray-700',
                      'block w-full px-4 py-2  text-left text-sm'
                    )}
                  >
                     
                    <b>Children</b><br/>Ages 2-12
                    <img class="w-5 h-5 mr-5 rounded-full" src="location.png" alt="Location"/>
                  </button>
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
