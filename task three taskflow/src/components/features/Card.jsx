const Card = ({
  imageSrc,
  backgroundColor,
  textColor,
  subTitle,
  title,
  description,
  children,
}) => {
  return (
    <li className="flex flex-col justify-between text-left bg-purple-0 p-8 rounded-2xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 drop-shadow-xs">
      <div>
        <div
          className={`w-14 h-14 ${backgroundColor} flex justify-center items-center rounded-xl mb-6`}
        >
          <img src={imageSrc} alt={`${subTitle} icon`} />
        </div>

        <span className={`text-xs font-bold ${textColor} tracking-wider`}>
          {subTitle}
        </span>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-3 text-gray-500 leading-6">{description}</p>
      </div>

      <div className="mt-6 p-4 bg-purple-200/30 rounded-xl">{children}</div>
    </li>
  );
};

export default Card;
