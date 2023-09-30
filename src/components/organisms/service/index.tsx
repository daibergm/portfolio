import Image from 'next/image';
import { SERVICES } from '@/data';

function Service() {
  return (
    <>
      {SERVICES.map((item) => (
        <div
          className="about-box bg-transparent"
          key={item.id}
          style={{
            background: 'transparent',
          }}
        >
          <Image
            className="w-10 h-10 object-contain  block"
            src={item.icon}
            width={40}
            height={40}
            alt="icon"
          />
          {/* TODO: Validate styles for empty description */}
          <div className="space-y-2 break-all">
            <h3 className="text-white text-xl font-semibold">{item?.title}</h3>
            {item?.des && (
              <p className=" leading-8 text-[#A6A6A6]">{item?.des}</p>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Service;
