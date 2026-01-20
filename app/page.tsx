import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const productLink = "https://mamawonne.de/products/babykissen-gegen-plattkopf-orthopadisches-lagerungskissen-neugeborene-0-12-monate-kopfformungskissen-baby?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web";

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center md:text-left">
          <span className="text-xl font-bold tracking-tight text-pink-600">MamaWonne</span>
          <span className="mx-2 text-gray-300">|</span>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Eltern Erfahrungen</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <article className="prose prose-lg prose-gray max-w-none">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Eine Mutter teilt ihre Erfahrung: Was wirklich hinter der Kopfverformung steckt—und warum die üblichen Ratschläge nicht funktionieren
          </h1>

          <div className="flex items-center gap-3 mb-8 text-sm text-gray-500 border-b pb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 font-bold overflow-hidden">
              MS
            </div>
            <div>
              <p className="font-semibold text-gray-900 m-0">Von Maria S.</p>
              <p className="m-0">19. Januar 2026</p>
            </div>
          </div>

          <p className="font-medium text-lg text-gray-700 italic border-l-4 border-pink-500 pl-4 bg-gray-50 py-2 mb-6">
            Es war ein ganz normaler Dienstagabend. Mia war zwölf Wochen alt. Ich badete sie, wie jeden Abend, und fuhr dabei mit den Fingern sanft über ihren Kopf.
          </p>

          <p>Da spürte ich es.</p>
          <p>Eine flache Stelle. Rechts hinten. Deutlich spürbar.</p>
          <p>Mein Magen zog sich zusammen.</p>

          <p>Ich drehte sie vorsichtig, um besser sehen zu können. Im Badezimmerlicht war es nicht zu übersehen: Ihr Hinterkopf war nicht mehr rund. Er war abgeflacht. Auf einer Seite mehr als auf der anderen.</p>

          <p>Ich sagte mir, dass ich mir das einbilde. Dass ich überreagiere. Dass ich eine übervorsichtige Erstlingsmama bin.</p>

          <p>Aber tief in mir wusste ich: Das bildete ich mir nicht ein.</p>

          <p>Was ich nicht wusste: Ich würde die nächsten drei Monate in einem Albtraum aus Schuldgefühlen, schlaflosen Nächten und falschen Ratschlägen verbringen—bis ich zufällig die eine Information fand, die alles veränderte.</p>

          <div className="my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/baby-after-side-v2.jpg"
              alt="Baby Hinterkopf abgeflacht seitlich gesehen"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Wenn die Kontrolle zur Obsession wird</h2>

          <p>In den folgenden Wochen wurde die Kontrolle zur Obsession.</p>

          <p>Jedes Wickeln. Jedes Stillen. Jedes Mal, wenn ich Mia aus dem Bettchen hob. Ich drehte ihren Kopf ins Licht. Fuhr mit den Fingern über die Stelle. Suchte nach Veränderung.</p>

          <p>Es wurde nicht besser. Es wurde schlimmer.</p>

          <p>Die flache Stelle breitete sich aus. Die Asymmetrie wurde deutlicher. Wenn ich Mia von oben betrachtete, konnte ich sehen, dass ihr Hinterkopf nicht mehr symmetrisch war.</p>

          <p>Nachts lag ich wach und googelte.</p>

          <p className="bg-yellow-50 p-4 rounded-lg my-4 italic text-gray-600">
            „Plattkopf Baby wann geht das weg“<br />
            „Plagiozephalie Heilung“<br />
            „Helmtherapie Kosten Deutschland“
          </p>

          <p>Was ich fand, machte mir Angst.</p>
          <p>Fotos von Babys in Helmen. Behandlungskosten von 1.500 bis 3.000 Euro. Therapiedauer von vier bis sechs Monaten. Dreiundzwanzig Stunden tägliches Tragen.</p>
          <p>Und dann die Geschichten von Eltern, deren Kinder noch Jahre später einen schiefen Kopf hatten.</p>

          <p>Ich lag im Bett, mein Handy leuchtete in der Dunkelheit, und weinte leise.</p>
          <p>Mein Mann schlief neben mir. Er verstand meine Sorgen nicht. „Der Kinderarzt wird uns sagen, was zu tun ist,“ sagte er.</p>
          <p>Aber ich hatte das Gefühl, dass jeder Tag zählte. Und dass ich irgendwie versagte.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">„Das verwächst sich“</h2>

          <p>Bei der U4 sprach ich den Kinderarzt an.</p>
          <p>Er warf einen kurzen Blick auf Mias Kopf und sagte die Worte, die ich nie vergessen werde:</p>

          <p className="font-bold text-gray-900">„Das verwächst sich.“</p>

          <p>Ich fragte nach. Ob ich mir Sorgen machen sollte. Ob ich etwas tun sollte.</p>

          <p>„Mehr Bauchlage. Umlagern beim Schlafen. Das wird schon.“</p>

          <p>Also stürzte ich mich hinein.</p>

          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong className="text-gray-900">Bauchlage:</strong> Fünfmal am Tag. Mindestens. Mia hasste es. Sie schrie jedes einzelne Mal. Manchmal hielt sie drei Minuten durch. Manchmal dreißig Sekunden. Ich zwang mich, sie liegen zu lassen, während sie weinte. Ich las, dass es wichtig sei. Dass ich konsequent sein müsse.</li>
          </ul>

          <p>Nach vier Wochen: <span className="font-semibold text-red-600">Keine Verbesserung.</span></p>

          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong className="text-gray-900">Umlagern:</strong> Jedes Mal, wenn ich nachts zu ihr ging, drehte ich vorsichtig ihren Kopf auf die andere Seite. Ich stellte mir Wecker. Alle zwei Stunden. Um sie umzulagern.</li>
          </ul>

          <p>Sie drehte sich innerhalb von zehn Minuten zurück. Immer. Ohne Ausnahme.</p>
          <p>Ich war erschöpft. Sie war erschöpft. Und es änderte nichts.</p>

          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong className="text-gray-900">Osteopath:</strong> Drei Sitzungen. 240 Euro. Die Therapeutin sagte, Mia habe eine leichte Blockade im Nacken gehabt. Diese sei jetzt gelöst. Die Muskeln seien entspannt.</li>
          </ul>

          <p>„Und der Plattkopf?“ fragte ich.</p>
          <p>„Das braucht Zeit. Machen Sie weiter mit der Bauchlage.“</p>

          <p>Aber ich machte ja weiter. Ich machte alles. Ich gab alles.</p>
          <p>Und trotzdem: Bei der nächsten Kontrolle war die Asymmetrie schlimmer geworden, nicht besser.</p>

          <p>Der Kinderarzt maß ihren Kopf. Schaute in seine Unterlagen. Dann zu mir.</p>

          <p className="bg-red-50 border-l-4 border-red-500 p-4 font-medium text-red-900 my-6">
            „Wenn sich das in den nächsten sechs Wochen nicht bessert, sollten wir über eine Helmtherapie nachdenken.“
          </p>

          <p>Sechs Wochen. Das war alles, was mir blieb.</p>

          <div className="my-8 rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <Image
              src="/pie-chart-new.jpg"
              alt="Diagramm Wachzeit vs Schlafzeit - 85% Schlaf, 15% Wachzeit"
              width={600}
              height={600}
              className="w-full h-auto object-contain bg-white"
            />
          </div>

          <p>In dieser Nacht konnte ich nicht schlafen.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Die Information, die alles veränderte</h2>

          <p>Ich saß im Wohnzimmer, Mia schlief endlich, und ich las mich durch medizinische Artikel, Studien, alles was ich finden konnte.</p>
          <p>Und dann stieß ich auf eine Information, die alles veränderte.</p>

          <p>Eine Studie über Säuglingsschädel und Druckverteilung. Darin stand etwas, das mir niemand gesagt hatte—nicht der Kinderarzt, nicht die Osteopathin, niemand.</p>

          <p className="text-xl font-bold text-gray-900 my-4">Ein Baby schläft vierzehn bis sechzehn Stunden am Tag.</p>

          <p>In diesen vierzehn Stunden liegt das gesamte Gewicht des Kopfes—etwa fünfundzwanzig Prozent des Körpergewichts—auf derselben Stelle. Stunde um Stunde. Nacht für Nacht.</p>

          <p><strong>Bauchlage?</strong> Die findet nur während der zwei bis drei Wachstunden statt. Das sind fünfzehn Prozent des Tages.</p>
          <p><strong>Umlagern?</strong> Babys kehren instinktiv in ihre bevorzugte Position zurück. Innerhalb von Minuten. Man kann nicht gegen die Biologie ankämpfen—schon gar nicht im Schlaf.</p>

          <p>Plötzlich machte alles Sinn.</p>

          <p>Ich hatte das Problem tagsüber bekämpft. Mit Bauchlage. Mit Umlagern. Mit allem, was mir gesagt wurde.</p>
          <p>Aber der eigentliche Schaden passierte nachts. Während der vierzehn Stunden, die ich nicht kontrollieren konnte.</p>

          <p>Ich hatte die ganze Zeit am falschen Ende gekämpft.</p>

          <div className="my-8 rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <Image
              src="/bar-chart-new.png"
              alt="Ein Tag im Leben Ihres Babys - Schlaf vs Wachzeit"
              width={800}
              height={300}
              className="w-full h-auto object-contain bg-white"
            />
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Wie konnte ich die 14 Stunden beeinflussen?</h2>

          <p>Ich konnte Mia nicht vierzehn Stunden am Tag tragen. Ich konnte nicht jede Stunde aufstehen und sie umlagern—das hatte ich versucht, es funktionierte nicht. Ich konnte nicht neben ihrem Bett sitzen und ihren Kopf festhalten.</p>

          <p>Aber was, wenn es etwas gäbe, das den Druck verteilt—automatisch, die ganze Nacht, ohne dass ich eingreifen muss?</p>

          <p>Das Prinzip war einfach: Statt dass der gesamte Druck auf einem kleinen Punkt lastet, wird er auf eine größere Fläche verteilt.</p>
          <p>Physikalisch logisch. Je größer die Auflagefläche, desto geringer der Druck pro Quadratzentimeter.</p>

          <p>Ich begann, nach Lagerungskissen zu suchen. Nicht normale Babykissen—die sind oft zu weich oder nicht für diesen Zweck konzipiert. Sondern spezielle Kissen mit einer Mulde, die den Kopf umschließt und den Druck gleichmäßig verteilt.</p>

          <p>Es klang zu einfach. Nach all dem, was ich versucht hatte, konnte ein Kissen wirklich den Unterschied machen?</p>
          <p>Ich war skeptisch. Aber ich war auch verzweifelt.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Die Begegnung in der Krabbelgruppe</h2>

          <p>Zwei Tage später traf ich Katharina in der Krabbelgruppe.</p>
          <p>Ich kannte sie flüchtig. Unsere Babys waren etwa gleich alt. Vor ein paar Monaten hatte sie in unserer WhatsApp-Gruppe ein Foto gepostet und gefragt, ob jemand Erfahrung mit Plattkopf hat.</p>
          <p>Ich erinnerte mich, weil ihr Sohn Felix damals eine deutliche Abflachung hatte. Schlimmer als bei Mia.</p>
          <p>An diesem Morgen sah ich Felix über die Spielmatte krabbeln. Ich starrte auf seinen Kopf.</p>

          <p>Er war rund. Vollkommen rund.</p>

          <p>„Katharina,“ sagte ich, vielleicht etwas zu hastig. „Felix' Kopf... der Plattkopf... wie...?“</p>
          <p>Sie lächelte. „Weg. Komplett weg.“</p>
          <p>„Habt ihr den Helm gemacht?“</p>
          <p>„Nein. Kein Helm.“</p>

          <p>Ich muss sie angestarrt haben wie ein Gespenst.</p>

          <p>Sie erzählte mir ihre Geschichte. Die gleiche Geschichte wie meine. Bauchlage, Umlagern, Osteopath. Nichts half. Sie war kurz davor, den Termin für die Helmtherapie zu vereinbaren.</p>

          <p>„Dann hat meine Hebamme mir etwas erklärt,“ sagte Katharina. „Sie sagte, das Problem sei nicht, was tagsüber passiert. Es seien die vierzehn Stunden Schlaf, in denen sich der Druck aufbaut. Und sie hat mir ein Lagerungskissen empfohlen.“</p>

          <p>Mein Herz schlug schneller. Genau das, worüber ich gelesen hatte.</p>

          <p>„Ich war auch skeptisch,“ gab sie zu. „Aber nach zwei Wochen konnte ich den Unterschied fühlen. Nach sechs Wochen hat der Kinderarzt gesagt, wir brauchen keinen Helm.“</p>

          <p>Sie zeigte mir Fotos auf ihrem Handy. Vorher. Nachher.</p>
          <p>Der Unterschied war nicht zu übersehen.</p>
          <p>„Welches Kissen war das?“ fragte ich.</p>
          <p>Sie schickte mir noch am selben Abend den Link.</p>

          <div className="my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/before-after-new.jpg"
              alt="Vorher und Nachher: Babykopf Vergleich"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <p>Ich bestellte es sofort.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Der Test</h2>

          <p>Als das Paket ankam, war ich nervös. Nach allem, was ich versucht hatte, nach all den Enttäuschungen—konnte das wirklich funktionieren?</p>

          <p>Das Kissen sah anders aus als normale Babykissen. Eine ergonomische Form mit einer Mulde in der Mitte, speziell für den Babykopf. Das Material war fest genug, um Stabilität zu geben, aber weich genug für Komfort. Und es war atmungsaktiv—das war mir wichtig nach allem, was ich über Erstickungsgefahr gelesen hatte.</p>

          <p>Ich legte Mia für ihren Mittagsschlaf darauf.</p>
          <p>Sie meckerte nicht. Sie schlief ein. Einfach so.</p>

          <p>Die ersten Tage versuchte ich, nicht zu kontrollieren. Nicht jede Stunde ihren Kopf abzutasten. Ich wollte mir nicht wieder falsche Hoffnungen machen.</p>

          <p><strong className="text-gray-900">Tag fünf:</strong> Mein Mann sagte beim Frühstück beiläufig: „Mir kommt es so vor, als würde Mia besser schlafen seit dem neuen Kissen.“</p>
          <p>Er hatte Recht. Sie schlief ruhiger. Längere Phasen ohne Aufwachen.</p>

          <p><strong className="text-gray-900">Tag zehn:</strong> Ich konnte nicht mehr widerstehen. Ich tastete beim Baden vorsichtig über ihre Kopfform.</p>
          <p>Die scharfe Kante, die ich wochenlang gefühlt hatte—sie war weicher.</p>
          <p>Ich traute mich nicht, es laut auszusprechen. Ich wollte es nicht verschreien.</p>

          <p><strong className="text-gray-900">Tag vierzehn:</strong> Ich machte ein Foto. Verglich es mit einem von vor zwei Wochen.</p>
          <p>Der Unterschied war sichtbar.</p>
          <p>Ich saß auf dem Badezimmerboden und weinte. Diesmal vor Erleichterung.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Die Erlösung</h2>

          <p>Sechs Wochen später hatten wir unseren Kontrolltermin beim Kinderarzt.</p>
          <p>Ich war nervös. Trotz allem, was ich sah und fühlte, hatte ich Angst, dass er mir sagen würde, es sei nicht genug. Dass wir den Helm trotzdem bräuchten.</p>

          <p>Er maß Mias Kopf. Schaute auf die Werte. Verglich mit den alten Messungen.</p>
          <p>Dann sah er mich an.</p>

          <p className="text-xl italic text-gray-800 border-l-4 border-green-500 pl-4 py-2 my-4">„Das ist eine bemerkenswerte Verbesserung. Was auch immer Sie machen—machen Sie weiter.“</p>

          <p>Kein Helm. Keine 2.000 Euro. Kein dreiundzwanzigstündiges Tragen für mein Baby.</p>
          <p>Ich hätte heulen können. Direkt in der Praxis.</p>

          <p>Heute, drei Monate später, ist Mias Kopf rund. Vollkommen normal. Niemand, der sie sieht, würde ahnen, dass wir jemals ein Problem hatten.</p>

          <p>Ich erzählte ihr von der 14-Stunden-Lücke. Von dem Kissen. Von meiner Erfahrung.</p>
          <p>Jetzt warte ich auf ihre Nachricht in sechs Wochen.</p>
          <p className="font-medium text-lg mb-8">
            Ich bin mir ziemlich sicher, was sie mir schreiben wird.
          </p>

          <div className="my-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/chart-bar-v2.png"
              alt="Mutter mit Baby"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Warum Ihnen das niemand sagt</h2>

          <p>Was mich im Nachhinein am meisten frustriert: Die Informationen waren da. Sie waren verfügbar. Aber niemand hat sie mir gegeben.</p>

          <p>Seit 1992, als die „Rückenlage-Kampagne“ zur Vermeidung des plötzlichen Kindstods eingeführt wurde, ist die Rate von Schädelverformungen bei Säuglingen um das Sechsfache gestiegen. Babys schlafen sicherer auf dem Rücken—aber niemand hat bedacht, was vierzehn Stunden Rückenlage für den weichen Schädel bedeuten.</p>

          <p>In Kulturen, in denen Babys überwiegend getragen werden, ist Plagiozephalie nahezu unbekannt.</p>

          <p>Das Problem ist nicht, dass Eltern zu wenig tun. Das Problem ist, dass sie gegen die falschen vierzehn Stunden kämpfen.</p>

          <p>Bauchlage ist wichtig—für die motorische Entwicklung. Aber sie kann nicht ausgleichen, was in den vierzehn Stunden Schlaf passiert.</p>

          <p>Umlagern ist gut gemeint—aber biologisch zum Scheitern verurteilt, weil Babys instinktiv ihre bevorzugte Position einnehmen.</p>

          <p>Die einzige Lösung, die während der kritischen vierzehn Stunden wirkt, ist eine, die den Druck verteilt, ohne dass die Eltern eingreifen müssen.</p>

          <p className="font-bold text-gray-900">Das war das Kissen.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Meine Botschaft an Sie</h2>

          <p>Wenn Sie das hier lesen, sind Sie wahrscheinlich dort, wo ich vor ein paar Monaten war.</p>
          <p>Sie haben die flache Stelle bemerkt. Sie machen sich Sorgen. Vielleicht hat Ihr Kinderarzt „Das verwächst sich“ gesagt, aber Sie sehen, dass es schlimmer wird. Vielleicht machen Sie schon alles—Bauchlage, Umlagern, vielleicht sogar Osteopathie—und es hilft nicht genug.</p>

          <p>Ich verstehe Sie. Ich war Sie.</p>

          <p>Hier ist, was ich Ihnen sagen möchte:</p>

          <p>Es ist nicht Ihre Schuld. Sie machen wahrscheinlich alles richtig. Das Problem ist, dass die üblichen Ratschläge nur fünfzehn Prozent des Tages abdecken.</p>

          <p>Die Zeit ist wichtig. Der Schädel eines Babys ist in den ersten sechs bis zwölf Monaten am formbarsten. Danach wird die Korrektur schwieriger. Jede Woche zählt.</p>

          <p>Es gibt eine Lösung. Eine, die in den vierzehn Stunden wirkt, die Sie nicht kontrollieren können. Eine, die tausende Eltern vor der Helmtherapie bewahrt hat.</p>

          <p>Ich kann Ihnen nicht versprechen, dass es bei Ihrem Baby genauso funktioniert wie bei Mia. Jedes Kind ist anders.</p>

          <p>Aber ich kann Ihnen sagen: Ich wünschte, jemand hätte mir diese Informationen früher gegeben. Ich wünschte, ich hätte nicht drei Monate verloren mit Maßnahmen, die die falsche Tageszeit adressierten.</p>

          <p>Sie haben diese Informationen jetzt.</p>
          <p>Was Sie damit machen, liegt bei Ihnen.</p>
          <p>Aber wenn ich noch einmal am Anfang stehen würde, mit dem Wissen, das ich heute habe?</p>

          <p className="font-bold text-gray-900 mb-8">Ich würde keine Woche mehr warten.</p>



          <div className="bg-pink-50 border border-pink-100 rounded-xl p-8 text-center my-10 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Schützen Sie die Kopfform Ihres Babys</h3>
            <p className="mb-6 text-gray-700">Erfahren Sie mehr über das orthopädische Lagerungskissen, das Mia geholfen hat.</p>
            <Link
              href={productLink}
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 animate-pulse"
            >
              HIER KLICKEN: Mehr über das Lagerungskissen erfahren →
            </Link>
            <p className="mt-4 text-xs text-gray-500">Versand durch MamaWonne.de | Zufriedenheitsgarantie</p>
          </div>

        </article>
      </main>


      <footer className="bg-gray-100 py-8 mt-12 border-t text-center text-sm text-gray-500 mb-20 md:mb-0">
        <p>© {new Date().getFullYear()} MamaWonne. Alle Rechte vorbehalten.</p>
        <div className="mt-2 space-x-4">
          <Link href="https://mamawonne.de/policies/privacy-policy" className="hover:underline">Datenschutzerklärung</Link>
          <Link href="https://mamawonne.de/policies/terms-of-service" className="hover:underline">AGB</Link>
          <Link href="https://mamawonne.de/policies/legal-notice" className="hover:underline">Impressum</Link>
        </div>
      </footer>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50">
        <Link
          href={productLink}
          className="block w-full bg-pink-600 text-white text-center font-bold py-3 rounded-lg shadow-md hover:bg-pink-700 transition"
        >
          Kissen ansehen & Verfügbarkeit prüfen
        </Link>
      </div>
    </div>
  );
}
