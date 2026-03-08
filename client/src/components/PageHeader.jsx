import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle, illustration }) => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#fff7ed] via-white to-[#ffedd5] py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center px-6 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-gray-600 text-lg">{subtitle}</p>
        )}
      </motion.div>

      {illustration && (
        <div className="absolute inset-0 flex justify-end items-center z-0 pointer-events-none">
          {illustration}
        </div>
      )}

      {/* floating lights */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-orange-400 to-transparent rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[250px] h-[250px] bg-gradient-to-br from-yellow-300 to-transparent rounded-full blur-[100px] opacity-25" />
    </section>
  );
};

export default PageHeader;
