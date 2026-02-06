import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import UnitPage from "@/components/UnitPage";
import { getUnitBySlug } from "@/data/units";

const UnitDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const unit = slug ? getUnitBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!unit) return <Navigate to="/" replace />;

  return <UnitPage unit={unit} />;
};

export default UnitDetail;
