import{_ as r,a as u,b as c,c as p,d,e as m,f,g as h}from"./chunks/profile.dark.a76837f3.js";import{_,p as a,s as v,D as o,I as s,S as l,v as e,L as t,q}from"./chunks/framework.3f494197.js";const J=JSON.parse('{"title":"Génération des comptes","description":"","frontmatter":{},"headers":[],"relativePath":"fr-FR/manual/usage/platform.md","filePath":"fr-FR/manual/usage/platform.md"}'),g={name:"fr-FR/manual/usage/platform.md"},b=l('<h1 id="generation-des-comptes" tabindex="-1">Génération des comptes <a class="header-anchor" href="#generation-des-comptes" aria-label="Permalink to &quot;Génération des comptes&quot;">​</a></h1><p>Koishi se décrit comme un framework multiplateforme, mais que signifie vraiment cette &quot;multiplateforme&quot; ?Cela ne signifie pas seulement que Koishi prend en charge plusieurs plateformes d&#39;exécution, mais aussi que Koishi peut se connecter simultanément à plusieurs plateformes de chat et offrir une expérience la plus native possible :</p><ul><li>Koishi fournit une interface unifiée vous permettant de profiter de l&#39;écosystème complet de Koishi sur n&#39;importe quelle plateforme conversationalle.</li><li>Les applications Koishi peuvent se connecter simultanément à plusieurs plateformes de chat, ce qui permet aux utilisateurs d&#39;interagir avec votre robot sur n&#39;importe quelle plateforme.</li><li>Koishi prend en charge nativement la liaison de comptes multiplateformes, ce qui permet aux utilisateurs de migrer leurs données en toute transparence.</li></ul><p>Maintenant, explorons comment utiliser le système de compte multiplateforme dans Koishi.</p><h2 id="obtenir-des-informations-sur-le-compte" tabindex="-1">Obtenir des informations sur le compte <a class="header-anchor" href="#obtenir-des-informations-sur-le-compte" aria-label="Permalink to &quot;Obtenir des informations sur le compte&quot;">​</a></h2><p>Sur certaines plateformes, les informations du compte ne sont pas visibles, il est donc nécessaire d&#39;utiliser des outils pour les récupérer.</p><p>Le plugin <a href="./../../plugins/common/inspect.html">inspect</a> permet de récupérer des informations de session.Après avoir installé ce plugin, vous pouvez envoyer la commande <code>inspect</code> depuis n&#39;importe quel compte de plateforme à votre robot (n&#39;utilisez pas le mode sandbox, sinon, vous n&#39;obtiendrez que des données d&#39;utilisateur sandbox). Voici un exemple d&#39;informations de session obtenues :</p>',7),x=e("p",null,"Nom de la plateforme : discord",-1),z=e("p",null,"ID du message : 1085992290352373951",-1),C=e("p",null,"ID du canal : 835804172850561094",-1),k=e("p",null,"ID du groupe : 811975252883800125",-1),A=e("p",null,"ID de l'utilisateur : 811972350065115208",-1),K=e("p",null,"ID propre : 952190117479600159",-1),y=l('<p>Si vous souhaitez vous connecter ou lier des comptes, les champs &quot;Nom de la plateforme&quot; et &quot;ID de l&#39;utilisateur&quot; seront utiles.</p><h2 id="connexion-a-la-console" tabindex="-1">Connexion à la console <a class="header-anchor" href="#connexion-a-la-console" aria-label="Permalink to &quot;Connexion à la console&quot;">​</a></h2><p>De plus, ce plugin inclut un compte administrateur intégré, ce qui en fait le moyen le plus pratique pour les utilisateurs nouvellement installés de Koishi d&#39;obtenir des privilèges.Le plugin <a href="./../../plugins/console/auth.html">auth</a> permet à n&#39;importe quel utilisateur de se connecter à Koishi via la console et de gérer ses propres informations utilisateur.</p><h3 id="configuration-du-plugin-de-connexion" tabindex="-1">Configuration du plugin de connexion <a class="header-anchor" href="#configuration-du-plugin-de-connexion" aria-label="Permalink to &quot;Configuration du plugin de connexion&quot;">​</a></h3><p>Accédez à la page de configuration des plugins et cliquez sur le plugin &quot;auth&quot;.Vous y trouverez la section &quot;Paramètres administrateur&quot; :</p><p class="light-only"><img src="'+r+'" alt="plugin-login"></p><p class="dark-only"><img src="'+u+'" alt="plugin-login"></p><p>Entrez le mot de passe que vous avez préparé, puis cliquez sur &quot;Activer le plugin&quot;.Sélectionnez &quot;Connexion avec nom d&#39;utilisateur et mot de passe&quot;, entrez le nom d&#39;utilisateur que vous avez configuré (par défaut, c&#39;est <code>admin</code>) et le mot de passe, puis cliquez sur &quot;Connexion&quot; pour accéder à votre espace personnel.</p><p class="light-only"><img src="'+c+'" alt="login-password"></p><p class="dark-only"><img src="'+p+'" alt="login-password"></p><h3 id="connexion-en-tant-qu-utilisateur-standard" tabindex="-1">Connexion en tant qu&#39;utilisateur standard <a class="header-anchor" href="#connexion-en-tant-qu-utilisateur-standard" aria-label="Permalink to &quot;Connexion en tant qu&#39;utilisateur standard&quot;">​</a></h3><p>Si vous êtes un utilisateur standard du robot et que le robot est également configuré avec le plugin de connexion à la console, vous constaterez que vous avez un accès limité lorsque vous accédez pour la première fois à la console.Cela signifie que vous n&#39;êtes pas encore connecté.</p><p>Cliquez sur le bouton &quot;Connexion&quot; en bas à gauche, sélectionnez &quot;Connexion avec le compte de la plateforme&quot; et entrez le nom de la plateforme et l&#39;ID de l&#39;utilisateur.Cliquez sur &quot;Obtenir le code de vérification&quot; et envoyez le code de vérification affiché sur la page à votre robot via un message privé. Une fois cela fait, vous serez connecté.</p><p class="light-only"><img src="'+d+'" alt="login-platform"></p><p class="dark-only"><img src="'+m+'" alt="login-platform"></p><p>Une fois connecté, vous serez redirigé vers votre espace personnel où vous pourrez modifier votre nom d&#39;utilisateur et votre mot de passe. Les utilisateurs standards doivent initialement se connecter avec leur compte de plateforme. Une fois un nom d&#39;utilisateur et un mot de passe configurés, cliquez sur &quot;Appliquer les modifications&quot; dans le coin supérieur droit pour pouvoir vous connecter à l&#39;avenir avec votre nom d&#39;utilisateur et votre mot de passe.</p><h2 id="associer-les-comptes" tabindex="-1">Associer les comptes <a class="header-anchor" href="#associer-les-comptes" aria-label="Permalink to &quot;Associer les comptes&quot;">​</a></h2><p>Koishi prend en charge la association des comptes, ce qui signifie qu&#39;un compte Koishi peut correspondre à plusieurs utilisateurs de plateformes différentes.Une fois la association effectuée, vos données seront partagées quel que soit le lieu où vous interagissez avec le robot.</p><p>Koishi propose actuellement deux plugins officiels pour associer les comptes, que nous vous présenterons un par un.</p><h3 id="associer-dans-la-console" tabindex="-1">Associer dans la console <a class="header-anchor" href="#associer-dans-la-console" aria-label="Permalink to &quot;Associer dans la console&quot;">​</a></h3><p>Une fois connecté à la console, tout utilisateur peut associer son compte de plateforme dans la section &quot;Mon profil&quot;.Cliquez sur le bouton &quot;Ajouter&quot; à droite de &quot;Associer un compte de plateforme&quot; et suivez le processus similaire à la connexion avec un compte de plateforme pour lier un compte.</p><p class="light-only"><img src="'+f+'" alt="profile"></p><p class="dark-only"><img src="'+h+'" alt="profile"></p><p>Si vous souhaitez supprimer la liaison, cliquez simplement sur &quot;Dissocier&quot; à droite du compte de plateforme correspondant.</p><h3 id="associer-par-commande" tabindex="-1">Associer par commande <a class="header-anchor" href="#associer-par-commande" aria-label="Permalink to &quot;Associer par commande&quot;">​</a></h3><p>Le plugin <a href="./../../plugins/common/bind.html">bind</a> permet également de associer les comptes via des commandes.Envoyez la commande <code>bind</code> depuis le compte de la plateforme que vous souhaitez associer :</p>',26),S=e("p",null,"La commande bind permet de associer des données utilisateur entre plusieurs plateformes.Pendant le processus de association, les données de l'utilisateur d'origine seront entièrement préservées, tandis que les données de l'utilisateur de la plateforme cible seront écrasées par les données de l'utilisateur d'origine.",-1),P=e("p",null,"Veuillez confirmer que la plateforme actuelle est la plateforme cible, puis dans les 5 minutes suivantes, utilisez votre compte pour envoyer le texte suivant sur la plateforme d'origine :",-1),D=e("p",null,"Koishi/123456",-1),T=e("p",null,[t("Suivez les instructions et utilisez le compte de la plateforme d'origine pour envoyer "),e("code",null,"Koishi/123456"),t(" au robot.Si votre premier message est un message privé, la association est déjà terminée à ce stade.Si votre premier message est dans un groupe de discussion, le robot vous demandera de confirmer à nouveau :")],-1),V=e("p",null,"Vérification du jeton réussie !Nous allons maintenant passer à la deuxième étape.",-1),I=e("p",null,"Veuillez, dans les 5 minutes suivantes, utiliser votre compte sur la plateforme cible pour envoyer le texte suivant :",-1),N=e("p",null,"Koishi/654321",-1),L=e("p",null,"Remarque : La plateforme actuelle est votre plateforme d'origine, et les données utilisateur de cette plateforme remplaceront celles de la plateforme cible.",-1),R=e("p",null,[t("Suivez à nouveau les instructions et utilisez le compte de la plateforme cible pour envoyer "),e("code",null,"Koishi/654321"),t(" au robot. Cela complétera la association.")],-1),U=e("p",null,[t("Une fois la association effectuée, vous pouvez à tout moment envoyer "),e("code",null,"bind -r"),t(" depuis la plateforme cible pour dissocier les comptes.")],-1);function E(w,O,$,j,B,F){const i=a("chat-message"),n=a("chat-panel");return q(),v("div",null,[b,o(n,null,{default:s(()=>[o(i,{nickname:"Alice"},{default:s(()=>[t("inspect")]),_:1}),o(i,{nickname:"Koishi"},{default:s(()=>[x,z,C,k,A,K]),_:1})]),_:1}),y,o(n,null,{default:s(()=>[o(i,{nickname:"Alice"},{default:s(()=>[t("bind")]),_:1}),o(i,{nickname:"Koishi"},{default:s(()=>[S,P,D]),_:1})]),_:1}),T,o(n,null,{default:s(()=>[o(i,{nickname:"Alice"},{default:s(()=>[t("Koishi/123456")]),_:1}),o(i,{nickname:"Koishi"},{default:s(()=>[V,I,N,L]),_:1})]),_:1}),R,U])}const H=_(g,[["render",E]]);export{J as __pageData,H as default};
