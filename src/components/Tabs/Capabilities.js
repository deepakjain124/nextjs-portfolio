import { capabilities } from '@/Utils'
import React from 'react'

const Capabilities = () => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  {capabilities.map((item) => (
    <div
      key={item.title}
      className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition"
    >
      <div className="text-primary text-2xl mb-3">
        {item.icon}
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">
        {item.title}
      </h3>
      <p className="text-gray-400 text-sm mb-3">
        {item.desc}
      </p>
      <ul className="text-gray-300 text-sm space-y-1">
        {item.points.map(p => <li key={p}>• {p}</li>)}
      </ul>
    </div>
  ))}
</div>

  )
}

export default Capabilities