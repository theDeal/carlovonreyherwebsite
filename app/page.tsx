import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import Image from "next/image";
import * as m from "@/paraglide/messages";
import { Link } from "@/lib/i18n";

export const runtime = 'edge';


export default function Home() {
  return (
    <>
      <section className="container mx-auto min-h-screen">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-10 md:mt-20">
          <div className="col-span-1">
            <h1 className="md:font-light text-3xl md:text-primary/80 font-bold">
              {m.homepage_title_top()}
            </h1>

            <h1 className="text-6xl mt-4 font-bold font-jost hidden md:block">
              Carlo von Reyher
            </h1>
            <p className="text-sm mt-12 text-primary/80">
              {m.homepage_text_top()}
            </p>
          </div>
          <div className="col-span-2 md:p-10 pt-10">
            <Image
              src="/images/carlo_von_reyher_mtb.jpg"
              alt="Carlo von Reyher"
              width={500}
              height={500}
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto" id="projects">
        <div className="w-full flex justify-start">
          <h1 className="text-3xl font-jost mt-7 mb-3 font-semibold max-w-xl my-4">
            {m.homepage_project_title()}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
          <Card className="flex flex-col justify-stretch">
            <CardHeader>
              <h1 className="text-2xl font-semibold ">vonReyher.Media</h1>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {m.project_von_reyher_media_text()}
              </p>
              <h2 className="font-semibold text-xs mt-3">
                {m.project_homepage_title_leistungen()}
              </h2>
              <ul className="list-disc ml-5 mt-2 text-sm">
                <li>{m.list_homepage_roi_leads()}</li>
                <li>{m.list_webdevelopment()}</li>
                <li>{m.list_seo_sea_sem()}</li>
                <li>{m.list_design()}</li>
                <li>{m.list_marketing()}</li>
                <li>{m.list_brand_building()}</li>
              </ul>
            </CardContent>
            <CardFooter className="justify-self-end">
              <Link href={"https://vonreyher.media"}>
                <Button variant={"default"}>{m.cta_to_wesbite()}</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <h1 className="text-2xl font-semibold ">
                XVNT UG (Haftungsbeschränkt)
              </h1>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {m.project_xvnt_ug_text()}
              </p>
              <h2 className="font-semibold text-xs mt-3">
              {m.project_homepage_title_leistungen()}
              </h2>
              <ul className="list-disc ml-5 mt-2 text-sm">
                <li>{m.list_event_management()}</li>
                <li>{m.list_veranstaltungsplanung()}</li>
                <li>{m.list_equipment_vermietung()}</li>
              </ul>
            </CardContent>
            <CardFooter className="gap-2 flex flex-wrap">
              <Link href={"https://xvnt.events"}>
                <Button>{m.cta_to_wesbite()}</Button>
              </Link>
              <Link href={"https://glasvermietungplus.de"}>
                <Button variant={"secondary"}>Glasvermeitung Plus</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <h1 className="text-2xl font-semibold ">
                Winshore UG (Haftungsbeschränkt)
              </h1>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {m.project_wineshore_text()}
              </p>
              <h2 className="font-semibold text-xs mt-3">
                {m.project_homepage_title_leistungen()}
              </h2>
              <ul className="list-disc ml-5 mt-2 text-sm">
                <li>{m.list_wine_sales_database()}</li>
                <li>{m.list_vertrieb_von_wein()}</li>
                <li>{m.list_api_ki()}</li>
              </ul>
            </CardContent>
            <CardFooter className="gap-2 flex flex-wrap">
              <Link href={"https://wineshore.de"}>
                <Button>{m.cta_to_wesbite()}</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <h1 className="text-2xl font-semibold ">SitzplanDigital.de</h1>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {m.project_sitzplandigital()}
              </p>
              <h2 className="font-semibold text-xs mt-3">
              {m.project_homepage_title_leistungen()}
              </h2>
              <ul className="list-disc ml-5 mt-2 text-sm">
                <li>{m.list_create_seating()}</li>
                <li>{m.list_manage_seating()} </li>
                <li>{m.list_share_seating()}</li>
                <li>{m.list_random_seating()}</li>
              </ul>
            </CardContent>
            <CardFooter className="gap-2 flex flex-wrap">
              <Link href={"https://sitzplandigital.de"}>
                <Button>{m.cta_to_wesbite()}</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
            

              <h1 className="text-2xl font-semibold ">
                CVR Holding UG (Haftungsbeschränkt)
              </h1>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                {m.cvr_holding_text()}
              </p>
              <h2 className="font-semibold text-xs mt-3">
              {m.project_homepage_title_leistungen()}
              </h2>
              <ul className="list-disc ml-5 mt-2 text-sm">
                <li>{m.list_holding_companies()}</li>
                <li>{m.list_holding_imobilien()}</li>
                <li>{m.list_verwalten()}</li>
              </ul>
            </CardContent>
            <CardFooter className="gap-2 flex flex-wrap">
              <Link href={"https://vonreyher.com"}>
             
                <Button>
                <div className="w-10 my-4 mr-3">
                  <Image src="/images/cvrLogo.svg" alt="Carlo von Reyher | CVR Holding Logo" width={100} height={100} className="hidden dark:block" />
                  <Image src="/images/cvrLogoWhite.svg" alt="Carlo von Reyher | CVR Holding Logo" width={100} height={100} className="dark:hidden" />
                </div>
                {m.cta_to_wesbite()}</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="container mx-auto flex flex-col text-center my-20 items-center" id="about" itemScope itemType="https://schema.org/Person">
        <div className="w-20 my-4">

        <Image src="/images/cvrLogo.svg" alt="Carlo von Reyher | CVR Holding Logo" width={200} height={200} className="dark:hidden" />
        <Image src="/images/cvrLogoWhite.svg" alt="Carlo von Reyher | CVR Holding Logo" width={200} height={200} className="hidden dark:block" />
        </div>
        
        <h1 className="text-xl" itemProp="name">Carlo von Reyher</h1>
        <p className="text-sm max-w-[600px] my-5" itemProp="description">
        {m.about_carlo_von_reyher()}
        </p>
        <p className="text-xs mt-5 mb-2 underline-offset-2 underline" itemProp="jobTitle">Unternehmer und Webentwickler</p>

        
        <ul>
        <li>
        <Link href={'https://instagram.com/carlovonreyher'}>
          <Button variant={'link'}>
            Instagram
            <svg className="align-top w-4 -mt-2 pl-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </Button>
        </Link>
      </li>
      <li>
        <Link href={'https://twitter.com/carlovonreyher'}>
          <Button variant={'link'}>
            Twitter
            <svg className="align-top w-4 -mt-2 pl-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </Button>
        </Link>
      </li>
      <li>
        <Link href={'https://linkedin.com/in/carlovonreyher'}>
          <Button variant={'link'}>
            LinkedIn
            <svg className="align-top w-4 -mt-2 pl-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </Button>
        </Link>
      </li>
      <li>
        <Link href={'https://github.com/thedeal'}>
          <Button variant={'link'}>
            GitHub
            <svg className="align-top w-4 -mt-2 pl-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </Button>
        </Link>
      </li>
         
        </ul>
        


      </section>
    </>
  );
}
