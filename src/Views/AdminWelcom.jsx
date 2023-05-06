import React from 'react'

export default function AdminWelcom() {
  return (
    <div>
          <section id="hero-area" class="bg-light pt-48 pb-10 h-screen">
              <div class="container">
                  <div class="flex justify-between">
                      <div class="w-full text-center">
                          <h2 class="text-4xl font-bold leading-snug text-gray-700 mb-10 wow fadeInUp" data-wow-delay="1s">This is a Page that  admin can see
                              <br class="hidden lg:block"/>But user cant see </h2>
                          <div class="text-center mb-10 wow fadeInUp" data-wow-delay="1.2s">
                              <a href="/projects" class='py-2 px-4 rounded-sm bg-dark-blue text-white hover:bg-blue transition duration-300 ease-in-out'
                                  rel="nofollow"
                                  >Go to Projects</a>
                          </div>
                          <div class="text-center wow fadeInUp" data-wow-delay="1.6s">
                              <img class=" mx-auto h-96 w-96" src="/images/admin1.png" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}
