import { FC } from "react";
import { a11yDark, a11yLight, anOldHope, arta, atomOneDark, atomOneLight, CodeBlock, codepen, CopyBlock, dracula, far, github, googlecode, hybrid, irBlack, monoBlue, monokai, monokaiSublime, nord, obsidian, ocean, paraisoDark, paraisoLight, railscast, shadesOfPurple, solarizedDark, solarizedLight, sunburst, tomorrow, tomorrowNight, tomorrowNightBlue, vs2015, xt256, zenburn } from "react-code-blocks";
import { Code } from "./code";

interface Props {

}
const code1 = `{ $push: { <field1>: { <modifier1>: <value1>, ... }, ... } }`
const code2 = `db.contributor.find().pretty()
{
  _id: ObjectId("5kjhoiu3iou544mm456"),
  name: "Roshit",
  branch: "CSE",
  joiningYear: 2018,
  language: [
    "C#",
    "Python",
    "Java"
  ],
  personal: {
    age: 24,
    semesterMarks: [
      70,
      73.3,
      76.5,
      78,6
    ]  
  }
},
{
  "_id": ObjectId("5kjhoiu3iou544d564"),
  "name": "Jesus",
  "branch": "CSE",
  "joiningYear": 1992,
  "language": [
    "C#",
    "Typescript",
    "Java"
  ],
  "personal": {
    "age": 30,
    'semesterMarks': [
      60,
      63.3,
      66.5,
      68,6
    ]  
  }
},`
const code3 = `db.contributor.update(
  { name: "Rohit" }, 
  { $push: 
    { language: "C++" }
  }
  )`
const code4 = `db.contributor.find(
  { name: "Jesus" },
).pretty()
{
  "_id": ObjectId("5kjhoiu3iou544d564"),
  "name": "Jesus",
  "branch": "CSE",
  "joiningYear": 1992,
  "language": [
    "C#",
    "Typescript",
    "Java",
    "C++",
  ],
  "personal": {
    "age": 30,
    'semesterMarks': [ 60, 63.3,  66.5, 68,6 ]  
  }
},`
const code5 = `db.contributor.update(
  { name: "Sumit" }, 
  { $push: 
    { language: {
      $each: ["C++", "Ruby", "Go"] }
    }
  }
  )`
const code6 = `db.contributor.find(
    { name: "Jesus" },
  ).pretty()
  {
    "_id": ObjectId("5kjhoiu3iou544d564"),
    "name": "Jesus",
    "branch": "CSE",
    "joiningYear": 1992,
    "language": [
      "C#",
      "Typescript",
      "Java",
      "C",
      "Ruby",
      "Go",
    ],
    "personal": {
      "age": 30,
      'semesterMarks': [ 60, 63.3, 66.5, 68,6 ]  
    }
  },
  `
export const Blog = () => {
  return (
    <article className="px-4 py-24 mx-auto max-w-7xl" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
      <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
        <img src="http://www.mongodb.com/docs/assets/meta_generic.png" className="object-cover w-full h-64 bg-center rounded-lg" alt="Kutty" />
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">Development</p>
        <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl" itemProp="headline" title="Rise of Tailwind - A Utility First CSS Framework">
          What is MongoDB - Working And Features

        </h1>
        <div className="flex mb-6 space-x-2">
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">MongoDB</a>
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">NodeJS</a>
        </div>
        <a className="flex items-center text-gray-700" href="#">
          <div className="avatar"><img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/a-/AFdZucpRRCMJtfC078O3JH5ra7gWtmkYx-d3T6XEsKeg=s288-p-rw-no" alt="Photo of Praveen Juge" /></div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Jesus Calamani</p>
            <p className="text-sm text-gray-500">Jan 02 2021</p>
          </div>
        </a>
      </div>
      <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
        <p>
          MongoDB is an open-source document-oriented database that is designed to store a large scale  of data and also allows you to work with that data very efficiently. It is categorized under the NoSQL (Not only SQL) database because the storage and retrieval of data in the mongoDB are not in the form of tables.
        </p>
        <br />
        <p>The mongoDB database is developed and managed by MongoDB.Inc under SSPL(Server Side Public License) and initially released in february 2009. It also providers official driver support for all the popular languages like C, C++, C# and .Net, Go, Java, Nodejs, Perl, PHP, Python, Motor, Ruby, Scala, Swift, Mongoid. So, that you can create an application using any of these languages.</p>
        <br />
        <p>{`Nowadays there are so many companies that use MongoDB like facebook, nokia, ebay, adobe, google, etc. to store their amount of data.`}</p>
        <br />
        <CopyBlock
          text={code1}
          language={"html"}
          showLineNumbers
          theme={monokai}
          // highlight="-"
          wrapLines={true}

          codeBlock
        />


        <br />
        <p>
          Therefore, we don’t have to write any custom CSS to get this button. This can be heavily extended to build whole web applications without the need for any other styles apart from a tailwind.
        </p>
        <p>...</p>
      </div>
    </article>
  )
}
export const Blog1 = () => {
  return (
    <article className="px-4 py-24 mx-auto max-w-7xl" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
      <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
        <img src="http://www.mongodb.com/docs/assets/meta_generic.png" className="object-cover w-full h-64 bg-center rounded-lg" alt="Kutty" />
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">Development</p>
        <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl" itemProp="headline" title="Rise of Tailwind - A Utility First CSS Framework">
          MongoDB - $push Operator

        </h1>
        <div className="flex mb-6 space-x-2">
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">MongoDB</a>
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">NodeJS</a>
        </div>
        <a className="flex items-center text-gray-700" href="#">
          <div className="avatar"><img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/a-/AFdZucpRRCMJtfC078O3JH5ra7gWtmkYx-d3T6XEsKeg=s288-p-rw-no" alt="Photo of Praveen Juge" /></div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Jesus Calamani</p>
            <p className="text-sm text-gray-500">Jan 02 2021</p>
          </div>
        </a>
      </div>
      <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
        <p>
          MongoDB provides different types of array update operators to update the values of the array fields in the documents and <b>$push</b> operator is one of them. This operator is used to append a specified value to an array.
        </p>
        <br />

        <h2 className="font-semibold text-gray-800">Syntax:</h2>
        <Code text={code1} language="jsx" />

        <br />
        <p>Here, {`<field>`} can specify with dot notation in embedded/nested documents or an array.</p>

        <ul className="list-disc list-inside">
          <li>
            If the specified field in the $push operator is not present in the document, then this operator will add the array field with the value as its items.
          </li>
          <li>
            The $push operator insert items at the end of the array.
          </li>
          <li>
            If the specified field in the $push operator is not an array, then this operation will fails.
          </li>
          <li>
            If the value of the $push operator is an array, then this operator will append the whole array as a single element. And if you want to add each item of the value separately, then you can use $each modifier with $push operator.
          </li>
          <li>
            You can use this operator with methods like update(), findAndModify(), etc., according to your requirement.
          </li>
        </ul>
        <br />
        <p>We can also use the following modifiers with the <b>$push</b> operator:</p>
        <br />
        <h2 className="font-semibold text-gray-800">Syntax:</h2>

        <Code text={code1} language="jsx" />

        <br />
        <p>
          The processing of the push operation with modifiers works in the following order:
        </p>
        <ul className="list-disc list-inside">
          <li>
            First update the array to add items in the correct position.
          </li>
          <li>
            Second, apply sort if specified.
          </li>
          <li>
            Third slice the array if specified.
          </li>
          <li>
            Fourth store the array.
          </li>
        </ul>
        <br />
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Modifier</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$each</td>
              <td>It is used to append multiple values to the array field.</td>
            </tr>
            <tr>
              <td>$slice</td>
              <td>It is used to limit the number of array items and require the use of the $each modifier.</td>
            </tr>
            <tr>
              <td>$sort</td>
              <td>It is used to order items of the array and require the use of the $each modifier.</td>
            </tr>
            <tr>
              <td>$position	</td>
              <td>	It is used to specify the location in the array at which to insert the new items and require the use of the $each modifier. If the $push operator does not use $position modifier, then this operator will append the items to the end of the array.</td>
            </tr>

          </tbody>
        </table>
        <br />
        <p>In the following examples, we are working with:</p>
        <br />
        <p><b>Database:</b> GeeksforGeeks</p>
        <p><b>Collection:</b> contributor</p>
        <p><b>Document:</b> two documents that contain the details of the contributor in the form of field-value pairs.</p>
        <br />
        <Code text={code2} language="jsx" />

        <br />
        <h2 className="font-semibold text-lg text-gray-800">Appending multiple values to an array:</h2>
        <p>In this example, we are appending a single value, i.e., “C++” to an array field, i.e., language field in the document that satisfy the condition(name: “Rohit”).</p>
        <br />
        <Code text={code3} language="jsx" />

        <br />

        <Code text={code4} language="jsx" />

        <br />
        <h2 className="font-semibold text-lg text-gray-800">Appending multiple values to an array:</h2>
        <p>In this example, we are appending multiple values, i.e., [“C”, “Ruby”, “Go”] to an array field, i.e., language field in the document that satisfy the condition(name: “Sumit”).</p>
        <br />
        <Code text={code5} language="jsx" />
        <br />
        <h2 className="font-semibold text-lg text-gray-800">Appending multiple values to an array in the nested/embedded document:</h2>
        {/* <br /> */}
        <p>In this example, we are appending multiple values, i.e., [89, 76.4] to an array field, i.e., personal.semesterMarks field of a nested/embedded document.</p>
        <Code text={code5} language="jsx" />
        <br />
        <Code text={code6} language="jsx" />
      </div>
    </article>
  )
}
export const Blog2 = () => {
  return (
    <article className="px-4 py-24 mx-auto max-w-7xl" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
      <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--6b7mvu9P--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/vgncmlu98um8dw9ccrcb.jpg" className="object-cover w-full h-64 bg-center rounded-lg" alt="Kutty" />
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">Development</p>
        <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl" itemProp="headline" title="Rise of Tailwind - A Utility First CSS Framework">
          SWR - React Hooks for Data Fetching

        </h1>
        <div className="flex mb-6 space-x-2">
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">Vercel</a>
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">NextJS</a>
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">ReactJS</a>
        </div>
        <a className="flex items-center text-gray-700" href="#">
          <div className="avatar"><img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/a-/AFdZucpRRCMJtfC078O3JH5ra7gWtmkYx-d3T6XEsKeg=s288-p-rw-no" alt="Photo of Praveen Juge" /></div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Jesus Calamani</p>
            <p className="text-sm text-gray-500">Jan 02 2021</p>
          </div>
        </a>
      </div>
      <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
        <p>
          El nombre “SWR” es derivado de stale-while-revalidate, una estrategia de invalidación de caché HTTP popularizada por HTTP RFC 5861. SWR es una estrategia para devolver primero los datos en caché (obsoletos), luego envíe la solicitud de recuperación (revalidación), y finalmente entrege los datos actualizados.
        </p>
        <br />

        <h2 className="font-semibold text-gray-800">Instalación:</h2>
        <br />
        <p>Dentro del directorio de su proyecto React, ejecute lo siguiente:</p>
        <br />
        <Code text={"yarn add swr"} language="jsx" />
        <br />
        <p>O con npm:</p>
        <br />
        <Code text={"npm install swr"} language="jsx" />

        <br />
        <h2 className="font-semibold text-lg text-gray-800">Inicio rápido</h2>
        <br />

        <p>Para APIs RESTFul normales con datos JSON, primero necesita crear una función <b>fetcher</b>, que no es más que una envoltura del <b>fetch</b> nativo:</p>
        <br />
        <Code text={"const fetcher = (...args) => fetch(...args).then(res => res.json())"} language="jsx" />
        <br />
        <p>Luego puede importar useSWR y empezar a usarlo dentro de cualquier componente de la función:</p>
        <br />
        <Code text={`import useSWR from "swr"

function Profile () {
  const { data, error } = useSWR("/api/user/123", fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // renderizar datos
  return <div>hello {data.name}!</div>
}`} language="jsx" />
        <br />
        <p>
          Normalmente, hay 3 estados posibles de una solicitud: `loading`, `ready`, o `error`. Puedes utilizar el valor data y error para determinar el estado actual de la solicitud, y devolver la UI correspondiente.
        </p>
        <br />
        <h2 className="font-semibold text-lg text-gray-800">Hágalo reutilizable</h2>
        <br />

        <p>Cuando construye una aplicación web, es posible que haya que reutilizar los datos en muchos lugares de la UI. Es increíblemente fácil crear hooks de datos reutilizables sobre SWR:</p>
        <br />
        <Code text={`function useUser (id) {
          const { data, error } = useSWR(/api/user/{id}, fetcher)return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}`} language="jsx" />
<br />
<p>
Y utilícelo en sus componentes:
</p>
<br />
<Code text={`function Avatar({ id }) {
   const { user, isLoading, isError } = useUser(id)

   if(isLoading) return <Spinner />
   if (isError) return <Error />
   return <img src={user.avatar} />
}`} language="jsx" />
<br />
<p>Al adoptar este patrón, puede olvidarse del fetching de datos de forma imperativa: inicie la solicitud, actualice el estado de carga, y devuelve el resultado final. En cambio, su código es más declarativo: sólo hay que especificar qué datos utiliza el componente.</p>
<br />
        <ul className="list-disc list-inside">
          <li>
            If the specified field in the $push operator is not present in the document, then this operator will add the array field with the value as its items.
          </li>
          <li>
            The $push operator insert items at the end of the array.
          </li>
          <li>
            If the specified field in the $push operator is not an array, then this operation will fails.
          </li>
          <li>
            If the value of the $push operator is an array, then this operator will append the whole array as a single element. And if you want to add each item of the value separately, then you can use $each modifier with $push operator.
          </li>
          <li>
            You can use this operator with methods like update(), findAndModify(), etc., according to your requirement.
          </li>
        </ul>
        <br />
        <p>We can also use the following modifiers with the <b>$push</b> operator:</p>
        <br />
        <h2 className="font-semibold text-gray-800">Syntax:</h2>

        <Code text={code1} language="jsx" />

        <br />
        <p>
          The processing of the push operation with modifiers works in the following order:
        </p>
        <ul className="list-disc list-inside">
          <li>
            First update the array to add items in the correct position.
          </li>
          <li>
            Second, apply sort if specified.
          </li>
          <li>
            Third slice the array if specified.
          </li>
          <li>
            Fourth store the array.
          </li>
        </ul>
        <br />
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Modifier</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$each</td>
              <td>It is used to append multiple values to the array field.</td>
            </tr>
            <tr>
              <td>$slice</td>
              <td>It is used to limit the number of array items and require the use of the $each modifier.</td>
            </tr>
            <tr>
              <td>$sort</td>
              <td>It is used to order items of the array and require the use of the $each modifier.</td>
            </tr>
            <tr>
              <td>$position	</td>
              <td>	It is used to specify the location in the array at which to insert the new items and require the use of the $each modifier. If the $push operator does not use $position modifier, then this operator will append the items to the end of the array.</td>
            </tr>

          </tbody>
        </table>
        <br />
        <p>In the following examples, we are working with:</p>
        <br />
        <p><b>Database:</b> GeeksforGeeks</p>
        <p><b>Collection:</b> contributor</p>
        <p><b>Document:</b> two documents that contain the details of the contributor in the form of field-value pairs.</p>
        <br />
        <Code text={code2} language="jsx" />

        <br />
        <h2 className="font-semibold text-lg text-gray-800">Appending multiple values to an array:</h2>
        <p>In this example, we are appending a single value, i.e., “C++” to an array field, i.e., language field in the document that satisfy the condition(name: “Rohit”).</p>
        <br />
        <Code text={code3} language="jsx" />

        <br />

        <Code text={code4} language="jsx" />

        <br />
        <h2 className="font-semibold text-lg text-gray-800">Appending multiple values to an array:</h2>
        <p>In this example, we are appending multiple values, i.e., [“C”, “Ruby”, “Go”] to an array field, i.e., language field in the document that satisfy the condition(name: “Sumit”).</p>
        <br />
        <Code text={code5} language="jsx" />
        <br />
        <h2 className="font-semibold text-lg text-gray-800">Appending multiple values to an array in the nested/embedded document:</h2>
        {/* <br /> */}
        <p>In this example, we are appending multiple values, i.e., [89, 76.4] to an array field, i.e., personal.semesterMarks field of a nested/embedded document.</p>
        <Code text={code5} language="jsx" />
        <br />
        <Code text={code6} language="jsx" />
      </div>
    </article>
  )
}
export const Blog3 = () => {
  return (
    <article className="px-4 py-24 mx-auto max-w-7xl" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
      <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
        <img src="https://cameronscott.co/assets/img/tailwind.jpg" className="object-cover w-full h-64 bg-center rounded-lg" alt="Kutty" />
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">Development</p>
        <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl" itemProp="headline" title="Rise of Tailwind - A Utility First CSS Framework">
          Tailwind CSS

        </h1>
        <div className="flex mb-6 space-x-2">
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">Vercel</a>
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">NextJS</a>
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">ReactJS</a>
        </div>
        <a className="flex items-center text-gray-700" href="#">
          <div className="avatar"><img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/a-/AFdZucpRRCMJtfC078O3JH5ra7gWtmkYx-d3T6XEsKeg=s288-p-rw-no" alt="Photo of Praveen Juge" /></div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Jesus Calamani</p>
            <p className="text-sm text-gray-500">Jan 02 2021</p>
          </div>
        </a>
      </div>
      <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
        <p>
          El nombre “SWR” es derivado de stale-while-revalidate, una estrategia de invalidación de caché HTTP popularizada por HTTP RFC 5861. SWR es una estrategia para devolver primero los datos en caché (obsoletos), luego envíe la solicitud de recuperación (revalidación), y finalmente entrege los datos actualizados.
        </p>
        <br />

        <h2 className="font-semibold text-gray-800">Instalación:</h2>
        <br />
        <p>Dentro del directorio de su proyecto React, ejecute lo siguiente:</p>
        <br />
        <Code text={"yarn add swr"} language="jsx" />
        <br />
        <p>O con npm:</p>
        <br />
        <Code text={"npm install swr"} language="jsx" />

        <br />
        <h2 className="font-semibold text-lg text-gray-800">Inicio rápido</h2>
        <br />

        <p>Para APIs RESTFul normales con datos JSON, primero necesita crear una función <b>fetcher</b>, que no es más que una envoltura del <b>fetch</b> nativo:</p>
        <br />
        <Code text={"const fetcher = (...args) => fetch(...args).then(res => res.json())"} language="jsx" />
        <br />
        <p>Luego puede importar useSWR y empezar a usarlo dentro de cualquier componente de la función:</p>
        <br />
        <Code text={`import useSWR from "swr"

function Profile () {
  const { data, error } = useSWR("/api/user/123", fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // renderizar datos
  return <div>hello {data.name}!</div>
}`} language="jsx" />
        <br />
        <p>
          Normalmente, hay 3 estados posibles de una solicitud: `loading`, `ready`, o `error`. Puedes utilizar el valor data y error para determinar el estado actual de la solicitud, y devolver la UI correspondiente.
        </p>
        <br />
        <h2 className="font-semibold text-lg text-gray-800">Hágalo reutilizable</h2>
        <br />

        <p>Cuando construye una aplicación web, es posible que haya que reutilizar los datos en muchos lugares de la UI. Es increíblemente fácil crear hooks de datos reutilizables sobre SWR:</p>
        <br />
        <Code text={`function useUser (id) {
          const { data, error } = useSWR(/api/user/{id}, fetcher)return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}`} language="jsx" />
<br />
<p>
Y utilícelo en sus componentes:
</p>
<br />
<Code text={`function Avatar({ id }) {
   const { user, isLoading, isError } = useUser(id)

   if(isLoading) return <Spinner />
   if (isError) return <Error />
   return <img src={user.avatar} />
}`} language="jsx" />
<br />
<p>Al adoptar este patrón, puede olvidarse del fetching de datos de forma imperativa: inicie la solicitud, actualice el estado de carga, y devuelve el resultado final. En cambio, su código es más declarativo: sólo hay que especificar qué datos utiliza el componente.</p>
<br />
        <ul className="list-disc list-inside">
          <li>
            If the specified field in the $push operator is not present in the document, then this operator will add the array field with the value as its items.
          </li>
          <li>
            The $push operator insert items at the end of the array.
          </li>
          <li>
            If the specified field in the $push operator is not an array, then this operation will fails.
          </li>
          <li>
            If the value of the $push operator is an array, then this operator will append the whole array as a single element. And if you want to add each item of the value separately, then you can use $each modifier with $push operator.
          </li>
          <li>
            You can use this operator with methods like update(), findAndModify(), etc., according to your requirement.
          </li>
        </ul>
        <br />
        <p>We can also use the following modifiers with the <b>$push</b> operator:</p>
        <br />
        <h2 className="font-semibold text-gray-800">Syntax:</h2>

        <Code text={code1} language="jsx" />

        <br />
        <p>
          The processing of the push operation with modifiers works in the following order:
        </p>
        <ul className="list-disc list-inside">
          <li>
            First update the array to add items in the correct position.
          </li>
          <li>
            Second, apply sort if specified.
          </li>
          <li>
            Third slice the array if specified.
          </li>
          <li>
            Fourth store the array.
          </li>
        </ul>
        <br />
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Modifier</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$each</td>
              <td>It is used to append multiple values to the array field.</td>
            </tr>
            <tr>
              <td>$slice</td>
              <td>It is used to limit the number of array items and require the use of the $each modifier.</td>
            </tr>
            <tr>
              <td>$sort</td>
              <td>It is used to order items of the array and require the use of the $each modifier.</td>
            </tr>
            <tr>
              <td>$position	</td>
              <td>	It is used to specify the location in the array at which to insert the new items and require the use of the $each modifier. If the $push operator does not use $position modifier, then this operator will append the items to the end of the array.</td>
            </tr>

          </tbody>
        </table>
        <br />
        <p>In the following examples, we are working with:</p>
        <br />
        <p><b>Database:</b> GeeksforGeeks</p>
        <p><b>Collection:</b> contributor</p>
        <p><b>Document:</b> two documents that contain the details of the contributor in the form of field-value pairs.</p>
        <br />
        <Code text={code2} language="jsx" />

        <br />
        <h2 className="font-semibold text-lg text-gray-800">Appending multiple values to an array:</h2>
        <p>In this example, we are appending a single value, i.e., “C++” to an array field, i.e., language field in the document that satisfy the condition(name: “Rohit”).</p>
        <br />
        <Code text={code3} language="jsx" />

        <br />

        <Code text={code4} language="jsx" />

        <br />
        <h2 className="font-semibold text-lg text-gray-800">Appending multiple values to an array:</h2>
        <p>In this example, we are appending multiple values, i.e., [“C”, “Ruby”, “Go”] to an array field, i.e., language field in the document that satisfy the condition(name: “Sumit”).</p>
        <br />
        <Code text={code5} language="jsx" />
        <br />
        <h2 className="font-semibold text-lg text-gray-800">Appending multiple values to an array in the nested/embedded document:</h2>
        {/* <br /> */}
        <p>In this example, we are appending multiple values, i.e., [89, 76.4] to an array field, i.e., personal.semesterMarks field of a nested/embedded document.</p>
        <Code text={code5} language="jsx" />
        <br />
        <Code text={code6} language="jsx" />
      </div>
    </article>
  )
}