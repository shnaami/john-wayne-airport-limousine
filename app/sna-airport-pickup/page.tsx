import ServiceArticlePage, { articleMetadata } from "../service-article";
import { SERVICE_ARTICLES } from "../service-content";
const article=SERVICE_ARTICLES.find(a=>a.path==="/sna-airport-pickup")!;
export const metadata=articleMetadata(article);
export default function Page(){return <ServiceArticlePage article={article}/>;}
