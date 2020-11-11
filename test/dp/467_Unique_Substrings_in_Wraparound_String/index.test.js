import findSubstringInWraproundString from "../../../src/dp/467_Unique_Substrings_in_Wraparound_String/index1";

test("1", () => {
  expect(findSubstringInWraproundString("a")).toBe(1);
});

test("2", () => {
  expect(findSubstringInWraproundString("cac")).toBe(2);
});

test("3", () => {
  expect(
    findSubstringInWraproundString(
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    )
  ).toBe(33475);
});

test("5", () => {
  expect(
    findSubstringInWraproundString(
      "fghijklmnolmnopfghijkklmnopqrstuvefghijklmnopqrsfghijfghijklmcderstujklmnopqrstdefghijghijkbcdelmnopqjklmnopqrstuvxjklmnopqrhijklmbcdefghijklmnopqrsabcdefghijklmnopqrstuvcdefghijklmnopqrstuvsrstuvwxobcdefghijklmnopqrstudefghijklmnopqrstuopqrijkldefghijklmnopqrghijklmnopqnopqrstuklmnojkltujklpqrstuvwxyzdefghijklmnopqrstuvwxyabcdefghijklmnohijklmnopqrstcdefghijklmnopqrstuvwmnopqrstuvhijkabstuvqrstmnopqrstuvwxyztuvwxyzqrstuvwcdefghcdefghijklmnopqrstubcdefghijklbcdefghijkmnopqrstuvwxyzdefghijklghijklmnopqrstuvwxabcdefghijklmnoijfghijklmnopqrstuvwxymnoplmnopqrstuvefghijklmnopqrstfghijklmnopqrstuvhijklmnopqrstuvwxbcdabcdefghijklmnopqrscdefghijklmnopbcdefghijkefghijklmnopqrstuvwxyzghijklmnopqrstuvwxyijklmnopghijklmnopcdefghijklmnhijklmnopqrstuvwxrstuvwxytuvjklmnopqrstuvwxycdefghijklmnopnopqruvefghyzghijklmnopqrstuvwxijklmnopqrstijklmnopqrstuvwxqrstuvwxlmnopqrsuvwxyklmnopqrstuvbcdefopqrstuvwxwxyklmnopqrstuvefghijklmnabcdefghijghijklmnopqrstbcdefghijklmnlmnopqrfghijklmnopmnopqrstuvwxyzabcdefghiyzefghijklmdefghijklmnopvwcdefghijabcdefghijklmnopqrstuvwxyzjklmnopqrsfghijklmnopqrstuvwhijklmnopqrstuvwxybcdefghijklabcdefghijklmnopqrstuvwxyzrstabdefghijklmnopqrstuvwxyfghijklmnopqrscdefghijklmnopqrstuvwxnopbcdefghijtuvwxrnopqrstuvwxyzfgtuvwxyrstuvwxyjopqrstursopqrstuvwxyzdefghijklmnopqrstuvwnopqrstuvwxyzpqrstuvwhijkabcstuvwfgcdefghijklmnopqrstuvwxmnopqrbcdefghijklmnopqrbcdefghijklmnopqrstuvwtuvwnopqklmnopqrsfghijklmnopqrscdefghijklmnopqrstuvwxefghijklmnoopqrstqrstuvcdefghijklmnrstuvwbcdefghijklmnopqrlmnopqghijklmghijklmnopghijklmnobcdefghiklmnopqrstuvwabcdefglmnopqrstuvwxyzefghiopqopqrstuvwxymnopqrstuvwxybcdefghijklmnklmnopqrdefghijklmnopqrstuvwjklmnopqrsdefghijklmnopqefghijklefghijklmnopstuvwxyzbcdefghijklmnopqrstuvwxghijklmnijklmnefghijjklmnopqghijklmnopqrlmnopqrstuvxyefghijvwxyzklmnovwxyznopqrsefghijkfghijklrstuvwxnopqrstuvwxyzopqrstuvbcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvbcdefghijklmnophihijkwxuvwhijklmnopqrstuabcdefghijklmnopqrstuvcdefghijklmnopqrstuhijklmncdefghijklmnklmnopqrscdefgbcdefghijklmnopqrstughijklmnopqrstuvxyfghijklmnopqrstuvwxydefghijklmnopqrstuvwxyztuvwcdefghijklmnopfghijklmnopqrstuvwxydefghijklmnopqrsthijklmnopqrstuvstefghijklmnopqrstbcdefghijklmnjklmnabcopnopqrstuvwxbcdefghijklmjkdefghijbcdefghijklqrstufghijklostuvwxbcdefghijklmnopqrsijdefghijkmnefghijklmnopqmnoabcdefghijkldefghijklmnopqrstujklmnopqrstuopqrstuvoabcdefghijklmnopqrstuvwxyzklmnopqijkcdefghijklmnopqrstufghijklmnopqrstuvwxyhijklmnopqrvwnopqrstuvwxydefghijklmnopqrstopqrabcmnopqrstuvwxydefghijklmnopqrabcdefgbcdefghijklmnopqrstuvwxyfghijklmnopbcdefghijklmnopqrstuvwbcdefghijklfghijklmnhijklmnopqrstuvwxvwxyzfghijklmnopqrsbcdabcdefabklmnopqrstefghijklmnopqrstuvwxklefguvwbcdefghtuvwxstuvwpqrstcdefghijklpqrstuvwxysthijklmnopqrsjklmpqrbcdefghijklmnnopqrsaefghijklmnopqabcdefghijklmnopqrsklmnopqrstuvhijklmqrstuvopqrsijklmnopqrbcdefghijklmnopqrstuvwxyzcdefghijklmnopqrstuvwxyzfghijklmnopqrijklmnopqrstuvwxyznopqrlmnijklmnopqdefghijklmnopqrstuvwxyzcdelmnopqrbcdefghijklmnopqrsklmnopqrstuvwhijklmnopqrstuvfghijklmnopqrstuvcdefghijklmnopqrsefghijlmnopqrstuvwxfghijklmndefghijklmnghijklmnopqrghijklmnopfghijklmnopqrsabcdefghijklmbcdefghijklmnghijklmnopqrstuvwxyklmnopqrstuvwxyzbcdstdefghijklmnopqdefghijklnopqrstuvtuvwtuvwjklmnopmnopqrstuvwxklmnopqrsfghijklmnopqrsnopqrstuvwlmndefghijklmnopqrstuvhijklmnopqrstuvwijklmncdefghijklmnopqrstopqrstuvwxyzjklghijklmnopqrstuvwxyijklmnopqrstudeftuvwxoklmnopqrstuvwxycdefghijklmnopqrstuvwxbcdefghijklmnopqrsthijkbcdefghijklmnoijklmcdefghijklmnopqrsmnopqrstuvhijklmnopqrstuvwdefghijklmnopqrstnopqrstabcdefghijklmnopqrstuvwxyfghijjklmnopqrstuvwxmnopqrstuvwxopijkljklmnorstuvmnopqrstuvwxopqrstuvwxhijklmnopqrstuvwxyefghijklmnopqrscdefghijklmnoefghijklmnopqrstuvabcdefghijkefghijklmnopqmnopqrstuvwxghijkcdefghijklmnybcdefghijklmnocdefghijklmnopmnopqrstbcdefghijklmnopqrstuqrsthijklmnopqrstijklmnopqrsklmnopqxyefgfghijklmnohijklmnoopqrsthijklmnopqrstuvxyzopqrstuefghijklmnopqrbcdefghijklmnoqrsklmnopqrstuvwxknopqrstuvqrstuvwxabcdcdefghijklmghijklmnopqrstcdefghijklmnopqrstuvwcdefghicdefghijklmnopqrstuvmnopqcdeijklmnopqrstuvwxyefghijklmnopqrabcdefghijklmnopqrstkcdefghijklmnojkabcdefghijklmnopqrsefghijklmnoptuvwxpqrstuvwxyzabcdefghijklmnhijkabcdefghijghijklmnopqmnoabcdefghijklmbcdefghijklmnopcdefghijklmnopqrefghijklmnopqrstuvwxdefghijklmnopqrrdefghijklmnstuvwxyzabcdefghijklmnopqrstuvwxybcdefghijklmnopqrstuefghijklmnopqrstuvwxyghijklmnopqrstuvwabcdefghijklmnopstuvwxyzwxyzbcdefklmnopqrabcdefghijklmnopqrsefghdefghijhijklbcdefghijklmnopqrstuvabcdefghijklmnopqrsmnopqrstuvwxyabcdefabcdefghijhihwxgpqbcdefghijklmnopqrsklmnopqbcdefghijklmnopqrstfghijklmnopqrstulmnohijklmabcdefghijklmnoefghijklmnopqrstuvwhijklmnijklmnopqrstuvwxyzijklmnopqrstuvwxyzhijklmnopqrstuvwxyghijklmnopqrsstulmnoghijklmnrstufghijklmnopqrstpqrsfghijklmnopqrcdefghijklmnopqrstuvwxyztqrstuvwxjklmnopqrstuvwefghituvwxyabqrghijklmncdefghijklmnopqdefghijklmnopqrmnopqrstuvwxyzfghijklmnopstdefghijklrstuvwhijklmnopqbcdemnopqrsdefghijklmlmnoppqrslmnqrnopqrstqrstuvwmnopqrstuvwxabcdefghijklopqrfghijklmnopqrmnopqghijklmnopqrstuvwxytubcdefghiijqrstuwxyzqrstuvabcdefghiopqrstpqrstuvwxhijklmnopqrstuvwxytucdefghijklmnopqrefghijklmnopqrstuvwmnopqrstuvwxyzopqrsbcdefghijklmnopqrshijklmnopqrshijklmnoopqrfghijklmnopnopqrsfghijklmnopqrstuvwxyfghijklmpquvtuvfghijklmnopqrstuvwxyzfghijklmnefghijklmnoklmnopqrstefghijklmnopqrstuvwxjklmnopqrstuvefghijklmnopqrstuvwxlmnopqrstuvwxyzhijklmnopqrstuvwlmnopqrstuvwxyzmnopqrsjklmnopqrstuvopqrstuvwxijklmnghijklmnopqrbcdcdefghijklbcdefghijklmnopqrstuvwabcdefghijklmnopqrstuvwxqrstghijklmnopqrsabcdefgstuvwxstdefghijklmnopqrstuvhijklmnhijklmdefghijklmnopqrstuvwnopqrsjkklmnopqrstwxijkijklmnopqrstuvwxyklklmnopqrstujklmnopqrstuvefhijklmnopqrstuefghijkfgjklmfgefghijklmnoplstuvwxyzstuvcdefghijrstuvwxldefghijklmabcdefghijklmnopqrstughijklmnoeflmnopqrswxkhijklmnopqrlmnodefghijklmnoklmnopqrstghijklmnolmdefghijklmnoppklmztuvwklmnopqrstuvwxabcdefghijklmnopqrstuabcdefghityzstuvwabcdefghijklmnopqrstunopqrstbcdefghijklmnopqrstubcdefghijkhijklmnopqrstuvwxyzqrcdefghijklmnopabcfghijklmnopqrstuvwxvwxyzghijklmnopqrstuvwopqstupqrsefghijklmnopqrstuvwxystnopqyzmfghabcdefghijklmnopbcdefgklmnopqrstuvwijklstuvefghijklmijklmnopqwxyzbcdefghijklmnopqrstuvwxycdefghijklmnopqrstuvwtuvwxydefghijklmnopqrstuvwxfghijklmnopqrstuvwxyrstufghdefghijklmnopqrsijklmnonopefghijklmnopqrsabcdefghijrstuvwhijklmnopqrstuvwxnopqrstuvwxyzcdefghijjkabcdefghijklmnoklmnopqrstuvwjklmefghijklmnopqrstuvwmnopqrsklmncdefghijklmnopqrstuvwxyklmnabcdefghijklmnopqrstuvmnopqrabcdefghijkgabcdefghijklmnopqrstopqrstuvbcdefghijklmnopqrsefghijklmnopqrstuvijklmnopqrstuvwxyfghijklmnopqrstuvwxyzfgfghijklmnopqrpqrstuvstuvwxyzklmnopfghijklmnopqrstuvdefgijklmnohpqrsthijklmnopqrsdefghijefghijklmnopqrstuvwxyzjklmnopqrsabcdefghijklmnopqrdefghijklmnopqrstuvwxdefghijklmnopqrstuvwxyzcdefghijklcdefghibcdefghijklmnopqrstuvghijklmnopabcdefwxabcdefghijklmnopqrstudefghijklmnopqrstuvwhijklmnabcdefghghmnopqrstuvbcdefghijkdefgtuvwsbcdefghijklmnouvwxefghijklmnnopqrstbcefghijkefghijklmnopqrstuvghidefgabcdefghijklmnopqrstuvwxylmnopqrstuopqrststfghijkhijkhiabcdefghijklmnbcdefghijklabcdefghijklmnopqrstuvwklmnoefghijklmnopqrstuvabcdefghijklmcdefghijhijklmnofghijklmnolmrstuvwxtuvwxyzbcdefghijklmnopqrstuvijefghijjklmvwopijklmnoflmnopqrstuvwxyzjklmnfghijklmnopklmnopqrstuvwiijklmnopghijkllmnopcdefghijklmnopqrstmnopqrstopqefghijklmnopqrstubcdefghijklmnopqrstufghijklmnopqrstuvwxyzhijkghijklmnopqrtuvwxybcdefghijklmnopqrstuvwxyklmnopqrghijklmnopqrstudefghijklmnopqijklmnoopqrsdefghijpqrstuvwxrstubcdefghijklmnopqrstuvwxyefghijklmnopqrstefghijklmnopqrstuvklmnopqrstuvwxyzlmnopqrstuvwxyfghijklabcdefghijklmnopqrstuabcdefghijklmnopmnopqrstuvijkhijklmnopqrshrcdefghijklmnopqrstuijkopqrsijklmnopqrstuvwxyzfghijklmnophijklmnopqdefghijklmnopqrstuvfghiefgghijklmnpqrsthijklmnopqrstuvwuvwxymmnopbcdefghijklmnopqbcdefghijklmnopqrstuvwxyabcdefghijklmnopqrstuvabcdefghijklmnopqrstuvwxyijklmnopqrstuvwxoppqrstuvwbcdefghijghijkcdefghijklmnopqrstcdefghijklmnopbcabcdefghijklmnopqrstuvwxpqrstuvwxklmnopqrstuvwxyzstuvwxdefghijklmnopqrabcdefghijklmnopqrstuvwxydefghijkdefghijklmnonopqrbcdefcdefghijklmnopqrstbcdefghijklmnopbcdeghijklmnopqrsghijklmnopqrsijklmnopqrssfghijklmnopqrstuvwxyqrstunopnopqrstcdefghijklmnbcdefghijklmnopqrstuvwxyzqrstuvwbcdefghijefghijklmnopqrcdefghijkbcdefghijklmnopqrsjklmnopqrstuvfghijklmnopqrstlmnopqrstubcdefghijklmnopqrstuvwxyzklmnoptfghijklmnopqefghibcdefefghilmnopdefghijkpqrstuvwxyghijklmnopmnopqrstuvwxyjklmnopqrdefghijklmnopqrstuabcdefiabcdefghijklabcdefghijkrstbcdefgijklmnopqrstuvwxbcdefghijklmnopqrstuvabcdefghijklmnopmnopqrstuvbcdefghiebrstuvwxyzdwxtuvwuvwefghijklstuvwghijklmnofghnopjklmnopqrsrstuvwopqrsabcdefghiwxyzfghijklmnoefjklmnoyzjkklghijkltuefghijklmnopabcdefghijklmnopqrstuvfghijklmnomwxybcdebcdefefghijklmnopqrvwxstuvwxyzijklmnopqrstuvwxhijklmnopqrstuvwxyzghijklmnopqklmnopqrstupqrstuvwxyfghijklmnopfghijklmnopqrstuvwxyzuvwxcdefghfghijklmnopdefghigcdeghijklmnostuvwxylmnopijklmnopqrsbcdefghijklmnopqrstdefghijklmnopqrstuvwxyzfghijklmnopqrstuvwxghijklmnopqrstuvwxnophistuvwxijklmnopqrstuvwxhijklmnopqrstuvwxwxyabcdefghijklmnopqrsbcdedefghijklmnopqrstuvghijklmnopqrstuvwxyabcdefcdefghijklmnopqrsnopqrstuvwtuvuvwxyzrstuvwxvwjklmkluvwjklmnonopqruvwxbcdefghijklmnopqijnopqrstuvwxcdefghijklmnopqrsbcdefghijklmnoprsjklmnopqrsopqrsefghijklpqcdefghijklmnopqcdefghijklmnopqrstuvopqrstuvwxyzbcdefghijklmnopqrsdefghijklmnopqrstubcdefghijklmnopqrscdefghijklmnopqrstuvwxdefghijqrstuvwxuvwxyzdefghimnopqrsabcdefghijklmnopqrsfghijklmnopqrstuvwghijklmnopqrstuvwxjklmnopqrstulmnopqrstuvwxjklmnopqrstuvwxyzqrstuvwxyzcdeopqrstuvwxymnolmnopabcdefghijklmnopqrstuvwxvwlmnopqbcdefghijklmnoefghijkenopqrjklmnopqrstuvcdefghijklmnopqropqrstuvwxyfghiefghijklmvwxlmefghijklefghijklmnopq"
    )
  ).toBe(33475);
});