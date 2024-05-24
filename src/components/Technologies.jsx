import React, { useState } from 'react';
import { RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAmazonaws, SiAwselasticloadbalancing, SiAwslambda, SiAwssecretsmanager, SiKubernetes, SiMysql, SiQlik, SiRubyonrails, SiSpringboot, SiSqlite, SiTensorflow } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiDocker, DiMongodb, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { motion } from "framer-motion";
import { GrKubernetes } from "react-icons/gr";
import { PiBellSimpleRingingThin } from "react-icons/pi";
import HoverIcon from './HoverIcon';


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"

      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"

      >
        <HoverIcon icon={<RiReactjsLine className="text-7xl text-cyan-400" />} text="React.js" duration={2.5} />
        <HoverIcon icon={<RiNodejsLine className="text-7xl text-green-400" />} text="Node.js" duration={2.5} />
        <HoverIcon icon={<SiRubyonrails className="text-7xl text-red-500" />} text="RubyonRails" duration={5}/>
        <HoverIcon icon={<BiLogoSpringBoot className="text-7xl text-green-400"/>} text="SpringBoot" duration={3}/>
        <HoverIcon icon={<SiMysql className="text-7xl text-sky-700" />} text="MySql" duration={4}/>
        <HoverIcon icon={<DiMongodb className="text-7xl text-green-400" />} text="MongoDB" duration={2.5} />
        <HoverIcon icon={<DiDocker className="text-7xl text-blue-700" />} text="Docker" duration={2}/>
        <HoverIcon icon={<SiKubernetes className="text-7xl text-blue-500" />} text="Kubernetes" duration={4}/>
        <HoverIcon icon={<SiAmazonaws className="text-7xl text-orange-700" />} text="AWS" duration={6}/>


      </motion.div>
      
    </div>
  );
};

export default Technologies;