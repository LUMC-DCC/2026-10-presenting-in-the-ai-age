-- Task-list checkboxes (☐) aren't in the PDF font; draw an empty box instead (Typst only).
function Str(el)
  if FORMAT:match("typst") and el.text == "☐" then
    return pandoc.RawInline("typst",
      '#box(baseline: 15%, stroke: 0.7pt + rgb("#003C7D"), width: 0.8em, height: 0.8em, radius: 1.5pt)#h(0.35em)')
  end
end
