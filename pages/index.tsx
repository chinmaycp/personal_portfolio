import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { services } from '../data';
import ServiceCard from '../components/ServiceCard';
import { variants, item, routeAnimation } from "../animations";

const index = () => {
  return (
    <motion.div className="flex flex-col px-6 pt-1 flex-grow" variants={routeAnimation} initial="hidden" animate="show" exit="exit">
      <Head>
        <title>Chinmay Patel | Home</title>
      </Head>
      <p className="my-3 font-medium">Collaborative computer science student with fundamental knowledge of web and software development. Eager to secure an internship/work position utilizing excellent analytical and programming abilities, and my experience with building web applications.</p>
      <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer:</h6>
        <motion.div className="grid lg:grid-cols-2 gap-6" variants={variants} initial="hidden" animate="show">
          {services.map((service) => (
            <motion.div
              className="lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg"
              key={service.title}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 }, }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

// export const getServerSideProps = async (context:GetServerSidePropsContext) => {
//   const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
//   const data = await res.json();
  
//   return {
//     props: {
//       services: data.services
//     }
//   };
// };

// export const getStaticProps = async (context:GetStaticPropsContext) => {
//   const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
//   const data = await res.json();
  
//   return {
//     props: {
//       services: data.services
//     }
//   };
// };