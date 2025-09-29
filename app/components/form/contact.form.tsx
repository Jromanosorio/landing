export default function ContactForm() {
    return (
        <form className="flex flex-col w-full mx-auto h-full">
            <div className="flex flex-col flex-1">
                <label className="text-sm text-gray-700">Nombre completo</label>
                <input type="text" name="fullName" placeholder="Tu nombre completo" className="border border-gray-300 my-3 p-2 rounded-lg text-sm" />

                <label className="text-sm text-gray-700">Email</label>
                <input type="email" name="email" placeholder="Tu nombre completo" className="border border-gray-300 my-3 p-2 rounded-lg text-sm" />

                <label className="text-sm text-gray-700">Tel&eacute;fono</label>
                <input type="text" name="phone" placeholder="Tu nombre completo" className="border border-gray-300 my-3 p-2 rounded-lg text-sm" />

                <label className="text-sm text-gray-700">Servicio de inter&eacute;s</label>
                <select name="service" id="service" className="text-sm border border-gray-300 my-3 p-2 rounded-lg">
                    <option value="">Selecciona un servicio</option>
                    <option value="service1">Desarrollo profesional</option>
                    <option value="service2">Orientacion vocacional</option>
                    <option value="service3">Empleabilidad</option>
                    <option value="service4">Paquete completo</option>
                </select>
            </div>
            <button disabled className=" w-full bg-blue-600 text-white p-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap">
                Solicitar consulta
            </button>
        </form>
    )
}